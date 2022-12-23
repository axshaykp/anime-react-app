import "./Home.scss";
import Banner from "../banner/Banner";
import Row from "../row/Row";

function Home() {
    return (
        <>
            <Banner />
            <Row url="watch/episodes" title="Latest Releases" />
            <Row url="watch/promos/popular" title="Must Watch" />
            <Row url="watch/episodes/popular" title="Most Loved" />
            <Row url="watch/promos" title="For You" />
        </>
    );
}

export default Home;
