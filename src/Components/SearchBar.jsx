import React from "react";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/16/solid";

const SearchBar = () => {
  return (
    <div className="flex-co w-full">
      <form>
        <input
          className="border border-stone-200 mb-2 p-2 text-stone-200 w-full"
          type="text"
          placeholder="Search"
        />

        {/* Distribution */}
        <div className="border border-stone-200 mb-2 p-2" id="distributions">
          <h3 className="text-stone-200 text-2xl underline">Distributions</h3>
          <input type="checkbox" id="arch" />
          <label className="text-stone-200 ml-1" htmlFor="arch">
            Arch (btw)
          </label>{" "}
          <br />
          <input type="checkbox" id="mint" />
          <label className="text-stone-200 ml-1" htmlFor="mint">
            Mint
          </label>{" "}
          <br />
          <input type="checkbox" id="ububtu" />
          <label className="text-stone-200 ml-1" htmlFor="ubuntu">
            Ububtu
          </label>{" "}
          <br />
          <input type="checkbox" id="debian" />
          <label className="text-stone-200 ml-1" htmlFor="debian">
            Debian
          </label>{" "}
          <br />
          <input type="checkbox" id="fedora" />
          <label className="text-stone-200 ml-1" htmlFor="fedora">
            Fedora
          </label>{" "}
          <br />
          <input type="checkbox" id="manjaro" />
          <label className="text-stone-200 ml-1.5" htmlFor="manjaro">
            Manjaro
          </label>{" "}
          <br />
          <input type="checkbox" id="gentoo" />
          <label className="text-stone-200 ml-1.5" htmlFor="gentoo">
            Gentoo
          </label>
        </div>

        {/* Desktop environments */}
        <div
          className="border border-stone-200 mb-2 p-2"
          id="desktop-environments"
        >
          <h3 className="text-stone-200 text-2xl underline">
            Desktop Environments
          </h3>
          <input type="checkbox" id="gnome" />
          <label className="text-stone-200 ml-1" htmlFor="gnome">
            GNOME
          </label>
          <br />
          <input type="checkbox" id="plasma" />
          <label className="text-stone-200 ml-1" htmlFor="plasma">
            KDE Plasma
          </label>
          <br />
          <input type="checkbox" id="xfce" />
          <label className="text-stone-200 ml-1" htmlFor="xfce">
            XFCE
          </label>
          <br />
          <input type="checkbox" id="cinnamon" />
          <label className="text-stone-200 ml-1" htmlFor="cinnamon">
            Cinnamon
          </label>
        </div>

        {/* Window managers */}
        <div className="border border-stone-200 mb-2 p-2" id="window-managers">
          <h3 className="text-stone-200 text-2xl underline">Window Managers</h3>
          <input type="checkbox" id="i3" />
          <label className="text-stone-200 ml-1" htmlFor="i3">
            i3
          </label>
          <br />
          <input type="checkbox" id="bspwm" />
          <label className="text-stone-200 ml-1" htmlFor="bspwm">
            bspwm
          </label>
          <br />
          <input type="checkbox" id="sway" />
          <label className="text-stone-200 ml-1" htmlFor="sway">
            sway
          </label>
          <br />
          <input type="checkbox" id="awesome" />
          <label className="text-stone-200 ml-1" htmlFor="awesome">
            awesome
          </label>
          <br />
          <input type="checkbox" id="hyprland" />
          <label className="text-stone-200 ml-1" htmlFor="hyprland">
            Hyprland
          </label>
          <br />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
