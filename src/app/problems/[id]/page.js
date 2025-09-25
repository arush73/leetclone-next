"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Editor from "@monaco-editor/react";
import ProblemHeader from "./problemHeader";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProblemStore } from "@/app/store/useProblemStore";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LoaderFour } from "@/components/ui/loader";

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const problemId = params.id;
  const {
    problem,
    getProblemDetails,
    isCodeRunning,
    isCodeSubmitting,
    runCode,
    submitCode,
  } = useProblemStore();

  // useEffect(() => {
  //   getProblemDetails(problemId);
  //   if (!problem) router.push("/problems");
  // }, [getProblemDetails, problemId, problem, router]);

  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("java");
  const handleSubmit = async () => {
    submitCode("le randi ke");
  };
  const handleRun = async () => {
    runCode("le randi ke");
  };
  const selectLanguage = (language) => {
    setLanguage(language);
    console.log(language);
  };
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between w-full p-4 ">
        <div>
          <Image
            src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
            height={20}
            width={20}
            alt=""
            onClick={() => {
              router.push("/");
            }}
          />{" "}
        </div>
        <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-3">
          <Button
            disabled={isCodeRunning || isCodeSubmitting}
            className={`${
              isCodeRunning
                ? "bg-black  disabled:opacity-100 disabled:cursor-not-allowed"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            onClick={handleRun}
          >
            {isCodeRunning ? <LoaderFour text="running" /> : "run"}
          </Button>
          <Button
            disabled={isCodeSubmitting || isCodeRunning}
            className={`${
              isCodeSubmitting
                ? "bg-black  disabled:opacity-100 disabled:cursor-not-allowed"
                : "bg-green-500 hover:bg-green-400"
            }`}
            onClick={() => handleSubmit()}
          >
            {isCodeSubmitting ? <LoaderFour text="submitting" /> : "submit"}
          </Button>
        </div>
        <div className="text-blue-500 font-bold">logo and stuff</div>
      </div>
      <div className="flex items-center justify-center h-screen w-full">
        <ResizablePanelGroup direction="horizontal" className="">
          <ResizablePanel defaultSize={40}>
            <Tabs defaultValue="account" className="">
              <TabsList className="flex space-x-8 w-full">
                <TabsTrigger value="description">description</TabsTrigger>
                <TabsTrigger value="editorial">editorial</TabsTrigger>
                <TabsTrigger value="submission">submission</TabsTrigger>
                <TabsTrigger value="solutions">solutions</TabsTrigger>
              </TabsList>
              <TabsContent value="description"></TabsContent>
              <TabsContent value="editorial" className="bg-black">
                <div className="flex flex-col items-center justify-center h-screen">
                  <h1 className="md:text-77xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
                    Coming Soon
                  </h1>
                  <div className="w-[40rem] h-40 relative">
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={1200}
                      className="w-full h-full"
                      particleColor="#FFFFFF"
                    />

                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="submission">submission</TabsContent>
              <TabsContent value="solutions">solutions</TabsContent>
            </Tabs>
          </ResizablePanel>
          <Separator orientation="vertical" className="bg-gray-700" />
          <ResizableHandle />
          <ResizablePanel defaultSize={60}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={60} className="">
                <div className="w-full h-full">
                  <div>
                    <Select
                      defaultValue="java"
                      onValueChange={(value) => selectLanguage(value)}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Language</SelectLabel>
                          <SelectItem value="javascript">Javascript</SelectItem>
                          <SelectItem value="java">Java</SelectItem>
                          <SelectItem value="python">Python</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="h-full w-full">
                    <Editor
                      height="100%"
                      // language={selectedLanguage.toLowerCase()}
                      language="javascript"
                      theme="vs-dark"
                      // value={code}
                      onChange={(value) => setCode(value || "")}
                      options={{
                        minimap: { enabled: true },
                        fontSize: 20,
                        lineNumbers: "on",
                        roundedSelection: false,
                        scrollBeyondLastLine: false,
                        readOnly: false,
                        automaticLayout: true,
                      }}
                    />
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <Separator className="bg-gray-600" />
              <ResizablePanel defaultSize={40} className="">
                three
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Page;
