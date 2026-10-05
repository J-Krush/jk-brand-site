import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

const ConnectCard = () => (
  <article
    className="relative mb-36 flex w-full flex-col items-center justify-center rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 text-center shadow-2xl dark:border-light dark:bg-dark
lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
  >
    <div
      className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
       dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
    />
    <p className="mb-8 text-lg font-medium">
      My client work now runs through Bash Squad. Reach out there for projects, consulting, or a conversation.
    </p>
    <div className="flex items-center gap-6 sm:flex-col">
      <a
        href="mailto:john@bashsquad.com"
        className="rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
      >
        john@bashsquad.com
      </a>
      <a
        href="https://bashsquad.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold text-primary underline underline-offset-4 dark:text-primaryDark sm:text-base"
      >
        Visit bashsquad.com
      </a>
    </div>
  </article>
);

export default function Connect() {
  return (
    <>
      <Head>
        <title>J-Krush Dev</title>
        <meta
          name="description"
          content="Full-stack software developer and software engineer"
        />
      </Head>
      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="pt-16">
          <AnimatedText
              text="Let's Connect"
              className="my-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <p className="font-medium text-lg mb-8 text-center">
                I love collaborating. Got an idea or project? Let&apos;s make something awesome together!
          </p>

          <div className="flex w-full items-start justify-between md:flex-col">
            <ConnectCard />
          </div>
        </Layout>
      </article>
    </>
  );
};
