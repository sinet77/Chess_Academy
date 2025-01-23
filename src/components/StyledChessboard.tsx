import { Chessboard } from "react-chessboard";
import { useAuth } from "../context/authContext";
import { ComponentProps } from "react";

export default function StyledChessboard(props: ComponentProps<typeof Chessboard>) {
  const { currentUser } = useAuth();
  return (
    <Chessboard
      
      {...props}
      customDarkSquareStyle={{
        background: currentUser.chessboard.darkSquare,
      }}
      customLightSquareStyle={{
        background: currentUser.chessboard.lightSquare,
      }}
    />
  );
}
