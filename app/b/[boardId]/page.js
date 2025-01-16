import Link from "next/link";
import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Board from "@/models/Board";

const getBoard = async (boardId) => {
  await connectMongo();
  const board = await Board.findById(boardId);

  if (!board) {
    redirect("/");
  }

  return board;
};

export default async function PublicFeedbackBoard({ params }) {
  const { boardId } = params;
  const board = await getBoard(boardId);

  return (
    <main className="bg-base-200 min-h-screen">
      {/*HEADER*/}
      <section className="bg-base-100">
        <div className=" max-w-5xl mx-auto px-5 py-3 flex"></div>
      </section>

      {board.name}
    </main>
  );
}
