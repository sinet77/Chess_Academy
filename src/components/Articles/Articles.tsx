import { Box, Button, CircularProgress, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import * as style from "./Articles.styles";
import { motion } from "framer-motion";

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchRSS = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent("https://theweekinchess.com/twic-rss-feed")}`);

      const data = await response.json(); 
      const textIn_XML_Format = data.contents;

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(textIn_XML_Format, "text/xml");
      const items = Array.from(xmlDoc.getElementsByTagName("item"));

      const articlesData: Article[] = items.map((item) => ({
        title: item.getElementsByTagName("title")[0].textContent || "",
        link: item.getElementsByTagName("link")[0].textContent || "",
        description:
          item.getElementsByTagName("description")[0].textContent || "",
        pubDate: item.getElementsByTagName("pubDate")[0].textContent || "",
      }));

      setArticles(articlesData);
    } catch (error) {
      console.error("Błąd podczas pobierania RSS:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRSS();
  }, []);

  const nextArticle = () => {
    if (currentIndex < articles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousArticle = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (loading) {
    return (
      <Box sx={style.Circular}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Box sx={style.ArticlesBox}>
        <Typography sx={style.HeadTitle}>Chess World News</Typography>
        {articles.length > 0 && (
          <Box sx={style.ArticlesBox}>
            <Box sx={style.Title}>{articles[currentIndex].title}</Box>
            <Box sx={style.PubDate}>{articles[currentIndex].pubDate}</Box>
            <Box sx={style.ButtonContainer}>
              <Button
                variant="outlined"
                sx={style.ButtonPrev}
                onClick={previousArticle}
                disabled={currentIndex === 0}
              >
                Previous
              </Button>
              <Button
                sx={style.ButtonNext}
                onClick={nextArticle}
                disabled={currentIndex === articles.length - 1}
              >
                Next
              </Button>
            </Box>
            <Box sx={style.Description}
              dangerouslySetInnerHTML={{
                __html: articles[currentIndex].description,
              }}
            />
            <Link
              sx={style.ReadMore}
              href={articles[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </Link>
          </Box>
        )}
      </Box>
    </motion.div>
  );
};

export default Articles;
