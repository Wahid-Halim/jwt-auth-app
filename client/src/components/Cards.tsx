const pokemonCards = () => {
  return (
    <div className="flex h-screen items-center justify-center flex-wrap gap-4">
      <div className="hover-3d">
        {/* content */}
        <figure className="w-60 rounded-2xl">
          <img src="charizardx.png" alt="Tailwind CSS 3D card" />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="hover-3d">
        {/* content */}
        <figure className="w-60 rounded-2xl">
          <img src="mega-charizard-x.png" alt="Tailwind CSS 3D hover" />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="hover-3d">
        {/* content */}
        <figure className="w-60 rounded-2xl">
          <img src="mega-diancie.png" alt="Tailwind CSS 3D hover" />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="hover-3d">
        {/* content */}
        <figure className="w-60 rounded-2xl">
          <img src="mega-heracross.png" alt="Tailwind CSS 3D hover" />
        </figure>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default pokemonCards;
