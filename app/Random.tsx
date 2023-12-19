import Facts from "./Facts";

export default function Random() {
  return (
    <>
      <section
        id="random"
        className="my-12 py-12 bg-gradient-to-b from-black via-slate-900 to-black"
      >
        <div className="text-2xl lg:text-4xl text-center font-mono font-extrabold">
          You can know
        </div>
        <div className="">
          <div className="flex flex-wrap justify-evenly">
            <Facts
              des={"Zodiac Sign: Aries"}
              emoji={"🎂"}
              fact={"Birthdate: 9th April, 2003"}
            />
            <Facts
              des={"You can call it, potato chapathi"}
              emoji={"😋"}
              fact={"Food: Aloo ke Parathe"}
            />
            <Facts
              des={"Just because `Vivek` and `Vwake` sound same"}
              emoji={"😏"}
              fact={"Nicknamed Myself: Vwake"}
            />
            <Facts
              des={"Nothing special, It is what it is"}
              emoji={"🤷‍♂️"}
              fact={"Lucky Number: 65"}
            />
            <Facts des={"iykyk!"} emoji={"🗿"} fact={"Native Place: Bihar"} />
            <Facts
              des={"Efficient Versatile Powerful."}
              emoji={"😎"}
              fact={"Favourite Computer Language: C++"}
            />
            <Facts
              des={"💛BGMI - IGL, Assaulter!"}
              emoji={"🎮"}
              fact={"Esports Enthusiast"}
            />
            <Facts
              des={"Dance just for fun, Danger steps!"}
              emoji={"🔥"}
              fact={"Like Dancing too"}
            />
            <Facts
              des={"External things shouldn't effect your inner-mind"}
              emoji={"😄"}
              fact={"Calm and Cool"}
            />
            <Facts
              des={"Basketball, Volleyball"}
              emoji={"🏀"}
              fact={"Also play Basketball"}
            />
          </div>
        </div>
      </section>
    </>
  );
}
