import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function footerComp() {
  return (
    <Footer container className="border border-t-2 bg-orange-50">
      <div>
        <div className="text-center max-w-full grid grid-cols-1 place-items-center sm:mt-4 sm:grid-cols-3 sm:gap-4 ">
          <div col>
            <Link
              to="/"
              className="self-center whitespace-nowrap sm:text-2xl font-semibold px-2 bg-gradient-to-tl from-orange-400 to-amber-200 hover:bg-rose-950 border-y-2 rounded-full text-rose-950 hover:text-orange-100 \"
            >
              Post Pulse
            </Link>
          </div>
            <div col className="mt-2">
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/" target="_blank" rel>
                  other Projects
                </Footer.Link>
                <Footer.Link href="/" target="_blank" rel>
                  Post Pulse blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div col className="mt-2">
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/SidhuDilbagh" target="_blank" rel>
                  Github
                </Footer.Link>
                <Footer.Link href="/" target="_blank" rel>
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
    </Footer>
  );
}
