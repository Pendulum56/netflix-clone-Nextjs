<<<<<<< HEAD
import Billboard from '@/components/Billboard'
import Navbar from '@/components/Navbar'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)
=======
import Billboard from "@/components/Billboard";
import Navbar from "@/components/Navbar";
import MovieList from "@/components/MovieList";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
>>>>>>> e892d88 (favorite list)

  if (!session) {
    return {
      redirect: {
<<<<<<< HEAD
        destination: '/auth',
        permanent: false,
      },
    }
=======
        destination: "/auth",
        permanent: false,
      },
    };
>>>>>>> e892d88 (favorite list)
  }

  return {
    props: {},
<<<<<<< HEAD
  }
}

export default function Home() {
=======
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();
  const { data: favorites = [] } = useFavorites();
>>>>>>> e892d88 (favorite list)
  return (
    <>
      <Navbar />
      <Billboard />
<<<<<<< HEAD
    </>
  )
=======
      <div className="pb-40">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My List" data={favorites} />
      </div>
    </>
  );
>>>>>>> e892d88 (favorite list)
}
