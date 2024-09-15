import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-xs dark:text-light dark:border-light sm:text-xs
    "
    >
      <Layout className="py-8 flex items-center justify-between flex-col py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center py-2">
          Bootstrapped with <span className="text-primary text-xs px-1 dark:text-primaryDark">&#9825;	</span> by&nbsp;
          <Link
            href="https://devdreaming.com"
            target="_blank"
            className="underline underline-offset-2"
          >
            CodeBucks
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
