// src/components/Memes.jsx
import React from "react";

const Memes = () => {
  // Array of chess meme image URLs
  const memes = [
    "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/AdityaFoundChess/phpCavQrH.png",
    "https://i.pinimg.com/736x/d7/fd/04/d7fd04e6e49946f2fdcab5b219e7cefa.jpg",
    "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/GM_of_Australia/phpTHgx9l.png",
    "https://images.chesscomfiles.com/proxy/www.troll.me/images/the-most-interesting-man-in-the-world/i-dont-always-play-chess-but-when-i-do-i-lose/http/c07ff66d5b.jpg",
    "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SerialDesignationN3071/phpkkXL6d.png",
    "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/Tyu3/phpGGuBXt.jpeg",
    "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/RhythmStar/phpFADo4s.webp",
    "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/RhythmStar/phpFADo4s.webp",
    "https://images.chesscomfiles.com/proxy/i.ytimg.com/vi/d2LNj4Q4ylM/maxresdefault/https/62095a7022.jpg",
    "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/Ritesh_ratn/phpFrrJgS.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKNo0HuTdUhUhHeQWH8fjHPD0Xtgw5AsItw&s",
    "https://images.chesscomfiles.com/proxy/www.shutupandtakemymoney.com/wp-content/uploads/2020/05/kings-in-a-chess-game-meme/https/a2f198e589.jpg",
    "https://preview.redd.it/g9xeha0hizp61.png?width=640&crop=smart&auto=webp&s=f1d0610b0f7ade6a6f505235d71bdc0b5202ec20",
    "https://img-9gag-fun.9cache.com/photo/a341Wv5_460s.jpg",
    "https://i.pinimg.com/1200x/d7/fd/04/d7fd04e6e49946f2fdcab5b219e7cefa.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3n70koffHkiKmI3YH35-vvbLMBpFclz4YOw&s",
    "https://pbs.twimg.com/media/E5W6HdUUUAExb4x.jpg",
    "https://pbs.twimg.com/media/E5W6HdUUUAExb4x.jpg",
    "https://images3.memedroid.com/images/UPLOADED245/676432e655d68.jpeg",
    "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/pete/phpp7w0zF.jpeg",
    "https://chameleonmemes.com/wp-content/uploads/2021/06/pieces-in-chess-b-like.jpeg",
    "https://upload-os-bbs.hoyolab.com/upload/2023/07/20/314713719/0d3f46a8509e6c063866d419f6936d02_1212577783775802557.jpeg?x-oss-process=image%2Fresize%2Cs_1000%2Fauto-orient%2C0%2Finterlace%2C1%2Fformat%2Cwebp%2Fquality%2Cq_70",
    "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/SmartChessPlayingCat/phpBRCufE.jpeg",
    "https://i.pinimg.com/736x/df/12/28/df1228a4eddc9ac6eb6a20a5d78cbac3.jpg",
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}> Chess Memes😂</h1>
      <p style={styles.subtitle}>Enjoy some funny chess memes!</p>
      <div style={styles.memeGrid}>
        {memes.map((meme, index) => (
          <div key={index} style={styles.memeCard}>
            <img src={meme} alt={`Chess Meme ${index + 1}`} style={styles.memeImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "10px",
    fontFamily: "'Georgia', serif",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  memeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "10px",
    justifyContent: "center",
  },
  memeCard: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  memeImage: {
    width: "90%",
    height: "auto",
    borderRadius: "25px",
  },
};

export default Memes;
