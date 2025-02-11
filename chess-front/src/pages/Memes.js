import React, { useState } from "react";
import "./Memes.css"; // Import the CSS file for styles

const Memes = ({user}) => {
  
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

  // Initialize reactions with null (no reaction)
  const initialReactions = memes.map(() => ({
    reaction: null, // No reaction initially
  }));

  const [reactions, setReactions] = useState(initialReactions);

  const handleReaction = (index, reactionType) => {
    setReactions((prevReactions) => {
      const newReactions = [...prevReactions];
      // Toggle reaction: If already reacted, reset; if not, apply the new reaction
      newReactions[index].reaction =
        newReactions[index].reaction === reactionType ? null : reactionType;
      return newReactions;
    });
  };
  if (!user) {
    return <div className="verify">Please log in to access this page.</div>;
  }
  return (
    <div className="memes-container">
      <h1 className="memes-title">Chess Memes 😂</h1>
      <p className="memes-subtitle">Enjoy some funny chess memes!</p>

      <div className="memes-grid">
        {memes.map((meme, index) => (
          <div key={index} className="meme-card">
            <img src={meme} alt={`Chess Meme ${index + 1}`} className="meme-image" />
            <div className="reaction-buttons">
              <button
                onClick={() => handleReaction(index, "like")}
                className={`reaction-btn ${reactions[index].reaction === "like" ? "active" : ""}`}
              >
                ❤️ {reactions[index].reaction === "like" ? "Liked" : "Like"}
              </button>
              <button
                onClick={() => handleReaction(index, "laugh")}
                className={`reaction-btn ${reactions[index].reaction === "laugh" ? "active" : ""}`}
              >
                😂 {reactions[index].reaction === "laugh" ? "Laugh" : "Laugh"}
              </button>
              <button
                onClick={() => handleReaction(index, "wow")}
                className={`reaction-btn ${reactions[index].reaction === "wow" ? "active" : ""}`}
              >
                😮 {reactions[index].reaction === "wow" ? "Wow" : "Wow"}
              </button>
              <button
                onClick={() => handleReaction(index, "dislike")}
                className={`reaction-btn ${reactions[index].reaction === "dislike" ? "active" : ""}`}
              >
                👎 {reactions[index].reaction === "dislike" ? "Disliked" : "Dislike"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memes;
