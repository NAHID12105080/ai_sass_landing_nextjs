import logoImage from "@/assets/images/sphereal-logo.svg?url";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
];

export const Header = () => {
  return (
    <header className="border-b border-gray-200/20 ">
      <div className="container">
        <div className="h-18 flex items-center">
          <div className="flex gap-4 items-center">
            <div
              className="size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))]"
              style={{
                maskImage: `url(${logoImage.src})`,
                maskSize: "contain",
                WebkitMaskImage: `url(${logoImage.src})`,
              }}
            ></div>
            <div className="font-extrabold text-2xl ">2Ai</div>
          </div>

          {/* 2nd section */}
          <div></div>
          {/* 3rd section */}
          <div>
            <button className="size-10 rounded-lg border-2 relative">
              <div className="w-4 h-0.5 bg-gray-100"></div>
              <div className="w-4 h-0.5 bg-gray-100"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
