import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, TelegramShareButton, TelegramIcon } from "react-share";
import conf from "../Config";
import CardSection from "../components/CardSection";
import Loading from "../views/Loading";
import ReactPlayer from 'react-player'

function Movie(){
    const nav = useNavigate();

    let embededData = {
        'embed':'https://drive.google.com/file/d/1bYKcSwfiqT5pVLXb_n1FcAXK9gnOIn5c/preview',
        'title':'flash',
        'stars':'10',
        'released':'2023',
        'runtime':135,
        'description':'Barry Allen uses his super speed to change the past, but his attempt to save his family creates a world without super heroes, forcing him to race for his life in order to save the future.',
        'recommendations':[
            {
                'id':1,
                'type':'movie',
                'image':'123',
                'title':'Most Recommended Movie'
            }
        ],
        'genres':['Animation','comedy','Sci-Fi','Action']
    }
    const { id } = useParams();

    const [data, setData] = useState<any>(embededData);

    async function getMovie(){
        try{
            const req = await fetch(conf.API_URL+"/movies/data?id="+id);
            const res = await req.json();

            if(res.success){
                setData(res.movie);            
            }
            else if(res.error){
                return nav("/404");
            }
        }
        catch(error){
            console.log(error);
        }
        
    }

    useEffect(() => {
        getMovie();
    }, [id]);
    
    if(!data){
        return <Loading />;
    }

    console.log({data});
    return (
        <>
            <Helmet>
                <title>{data.title+" - "+data.released+" - "+conf.SITE_NAME}</title>
            </Helmet>
            <div className="container">
                <div className="video-frame">
                    <iframe src={data.embed} allowFullScreen></iframe>
                    {/* <ReactPlayer url={data.embed} /> */}

                </div>

                <div className="video-meta">
                    <p className="video-meta-title">{data.title}</p>
                    
                    <div className="video-meta-row">
                        <div className="video-meta-stars">
                            <i className="fa-solid fa-star"></i>
                            <p>{data.stars}/10</p>
                        </div>
                        <p className="video-meta-year">{data.released}</p>
                        <p className="video-meta-length">{Math.floor(data.runtime / 60)}h {data.runtime % 60}m</p>
                    </div>

                    <p className="video-meta-desc">{data.description}</p>

                    <div className="video-meta-share">
                        <FacebookShareButton
                        url={location.href}
                        quote={`Watch ${data.title} - ${data.released} for free at ${location.href}`}
                        className="video-meta-button">
                            <FacebookIcon size={40} round />
                        </FacebookShareButton>

                        <TwitterShareButton
                        url={location.href}
                        title={`Watch ${data.title} - ${data.released} for free at`}
                        className="video-meta-button">
                            <TwitterIcon size={40} round />
                        </TwitterShareButton>

                        <TelegramShareButton
                        url={location.href}
                        title={`Watch ${data.title} - ${data.released} for free at ${location.href}`}
                        className="video-meta-button">
                            <TelegramIcon size={40} round />
                        </TelegramShareButton>
                    </div>

                    <div className="video-meta-genres">
                        {
                            data.genres.map((genre: string) => (
                                <div key={genre} className="video-meta-genre">
                                    <p>{genre}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <CardSection
                title="Recommended Movies 👍"
                items={data.recommendations} />
            </div>
        </>
    )
}

export default Movie;