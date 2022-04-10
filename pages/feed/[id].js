import Image from "next/image";
import Link from "next/link";
import { Toolbar } from "../../components/Toolbar";
import styles from "../../styles/Article.module.css";
import {useRouter} from "next/router";

export const Feed = ({pageNumber, articles}) => {
        console.log(pageNumber, articles);
        const router = useRouter();

    return(
        <>
            <Toolbar/>
             <div className={styles.main}>
                <div className="mt-6">
                    {articles.map((article,index) => <Article key={index} article={article}/>)}
                </div>

                <div className={styles.pagination}>
                    <div>
                        <button onClick={() => {
                            if(pageNumber > 1){
                                router.push(`/feed/${pageNumber - 1}`)
                            }
                        }} className={pageNumber === 1 ? styles.disabled : styles.enabled}>
                            Previous
                        </button>
                    </div>

                    <div>
                        #{pageNumber}
                    </div>

                    <div>
                        <button onClick={() => {
                            if(pageNumber < 10){
                                router.push(`/feed/${pageNumber + 1}`)
                            }
                        }} className={pageNumber === 10 ? styles.disabled : styles.enabled}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
       
    )
    
}

export const getServerSideProps = async pageContext => {

    const pageNumber = pageContext.query.id;
    if(!pageNumber || pageNumber < 1 || pageNumber > 10){
         return {
            props:{pageNumber:1, articles:[]}
        }
    }

    const apiRespone = await fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${process.env.NEWS_API_KEY}&pageSize=10&page=${pageNumber}`,);

    const apiJson = await apiRespone.json();
    const {articles} = apiJson;
    return {
        props:{
            pageNumber: Number.parseInt(pageNumber),
            articles
        }
    }
   
}


export const Article = ({article}) => {
    return (
            <Link href={article.url} passHref>
                <div className={styles.article}>
                    <div>
                        {article.author} - {article.source.name}
                    </div>
                    <div className="font-medium text-lg text-dark-300">
                        {article.title}
                    </div>

                    <div className="font-base text-sm">
                        {article.description}
                    </div>
                    {!!article.urlToImage && (
                        <div className={styles.articleImage}>
                            <Image
                            loader={ImageLoader}
                            src={article.urlToImage}
                            width={600}
                            height={400}
                            alt={article.urlToImage}
                            unoptimized={true}
                            />
                        </div>
                    )}
                </div>
            </Link>
    )
}


export const ImageLoader = ({src}) => {
    return src;
}

export default Feed;