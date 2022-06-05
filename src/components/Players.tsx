import { useAppSelector, useAppDispatch } from "../hooks";
import { useGetPlayersQuery } from "../features/apiSlice";

function Players() {
  const { data: players } = useGetPlayersQuery();
  // const { players } = useAppSelector((store) => store.player);
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20 text-center">
          <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Oyuncular
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>

        <div className="flex flex-wrap justify-center -m-4">
          {players?.map((player, index) => {
            return (
              <div key={index}>
                <div className="w-full p-2 lg:w-full md:w-full">
                  <div className="flex flex-col items-center h-full p-12 border border-yellow-500 rounded-lg ">
                    <img
                      alt="oyuncu"
                      className="flex-shrink-0 object-cover object-center w-32 h-32 bg-gray-100 rounded-full justify-self-end"
                      src="https://dummyimage.com/80x80"
                    ></img>
                    <div className="items-end flex-grow mt-3">
                      <h2 className="text-xl font-medium text-center text-gray-900 title-font">
                        {player.name}
                      </h2>
                      <p className="text-gray-500 ">
                        Veli: {player.guardianName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Players;
