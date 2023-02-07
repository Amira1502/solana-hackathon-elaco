import type { NextPage } from "next";
import Head from "next/head";
import { HomeView, HomeContent} from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Elaco</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <HomeView />
      <HomeContent />
      
    </div>
  );
};

export default Home;
