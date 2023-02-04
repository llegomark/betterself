import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { BibleType } from "../components/DropDown";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";
import ResizablePanel from "../components/ResizablePanel";
import SquigglyLines from "../components/SquigglyLines";
import Balancer from "react-wrap-balancer";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [response, setResponse] = useState<Record<string, unknown> | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [verse, setVerse] = useState("");
  const [bible, setBible] = useState<BibleType>(
    "Revised Standard Version Catholic Edition (RSVCE)"
  );
  const [generatedVerses, setGeneratedVerses] = useState<String>("");

  const router = useRouter();
  useEffect(() => {}, []);

  const prompt = `Please act as a Bible and assist users in understanding and interpreting its teachings by providing relevant Bible verses from the ${bible}. The user will provide a question, message or situation and you will respond with 3 relevant Bible verses clearly labeled "1." and "2." and "3.". Do not provide any additional context or interpretation. Clearly Label: ${bible}. Context: ${verse}${
    verse.slice(-1) === "." ? "" : "."
  }`;

  switch (bible) {
    case "Revised Standard Version Catholic Edition (RSVCE)":
    case "New American Bible Revised Edition (NABRE)":
    case "New King James Version (NKJV)":
    case "New International Version (NIV)":
      break;
    default:
      throw new Error("Invalid Bible Version");
  }

  const generateVerse = async (e: any) => {
    e.preventDefault();
    setGeneratedVerses("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      setResponse({
        status: response.status,
        body: await response.text(),
        headers: {
          "X-Ratelimit-Limit": response.headers.get("X-Ratelimit-Limit"),
          "X-Ratelimit-Remaining": response.headers.get(
            "X-Ratelimit-Remaining"
          ),
          "X-Ratelimit-Reset": response.headers.get("X-Ratelimit-Reset"),
        },
      });
      setLoading(false);
      alert(`Rate limit reached, try again after one minute.`);
      return;
    }

    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedVerses((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  const isDisabled = () => {
    if (verse === "") {
      return true;
    } else {
      return false;
    }
  };

  const limitCharacters = (e: any) => {
    if (e.target.value.length > 300) {
      e.target.value = e.target.value.substr(0, 300);
      toast.error("You have reached the maximum number of characters.");
    }
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>
          Discover Wisdom and Comfort in the Word of God - Better Self
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="sm:mt-15 mt-12 flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <h2 className="mx-auto max-w-4xl text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          <Balancer>
            Discover Wisdom and Comfort in the{" "}
            <span className="relative whitespace-nowrap text-[#3290EE]">
              <SquigglyLines />
              <span className="relative">Word of God</span>
            </span>{" "}
          </Balancer>
        </h2>
        <p className="mx-auto mt-12 max-w-xl text-lg leading-7 text-slate-900">
          <Balancer>
            Unlock the power of the Bible with BetterSelf, powered by{" "}
            <span className="font-bold">Artificial Intelligence (AI)</span>.
            Enter your request for personalized verses. Deepen understanding and
            gain insight effortlessly.
          </Balancer>
        </p>
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left text-base">
              Type any inquiries, expressions, emotions, or circumstances you
              would like to understand better.
            </p>
          </div>
          <textarea
            value={verse}
            onChange={(e) => setVerse(e.target.value)}
            onInput={limitCharacters}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={
              "I am going through a difficult situation, what does the Bible say about hope and strength?"
            }
          />
          <div className="flex mb-5 items-center space-x-3">
            <Image src="/2-black.png" width={30} height={30} alt="1 icon" />
            <p className="text-left text-base">Select a Bible Translation</p>
          </div>
          <div className="block">
            <DropDown
              bible={bible}
              setBible={(newBible) => setBible(newBible)}
            />
          </div>

          {!loading && (
            <button
              className="bg-black rounded-xl text-white text-base px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              onClick={(e) => generateVerse(e)}
              disabled={isDisabled()}
            >
              Search Related Verses &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white text-base px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="space-y-10 my-10">
              {generatedVerses && (
                <>
                  <div>
                    <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto">
                      <Balancer>Guidance from the Holy Scriptures</Balancer>
                    </h2>
                  </div>
                  <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                    {generatedVerses
                      .substring(generatedVerses.indexOf("1") + 3)
                      .split(/[1-3]\./)
                      .map((generatedVerse) => {
                        return (
                          <div
                            className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                            onClick={() => {
                              navigator.clipboard.writeText(generatedVerse);
                              toast("Word of God Copied to Clipboard", {
                                icon: "✂️",
                              });
                            }}
                            key={generatedVerse}
                          >
                            <p>
                              <Balancer>{generatedVerse}</Balancer>
                            </p>
                          </div>
                        );
                      })}
                    <p className="text-gray-500 text-xs mt-2 text-justify">
                      <Balancer>
                        Click verse to copy, interpretation requires guidance
                        from a religious leader or theologian. AI is not 100%
                        accurate, use own judgement and beliefs.
                      </Balancer>
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      <Footer />
    </div>
  );
};

export default Home;