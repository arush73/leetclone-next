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
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Description from "./Description";

const Page = () => {
  const problemData = {
    title: "Two Sum",
    statement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
  };
  const {
    problem,
    getProblemDetails,
    isCodeRunning,
    isCodeSubmitting,
    runCode,
    submitCode,
  } = useProblemStore();

  const params = useParams();
  const problemId = params.id;

  const router = useRouter();

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
    <div className="flex flex-col  h-fit w-fit origin-top-left ">
      {/* upar waala  */}
      <div className="flex items-center justify-between   pt-3 pb-4 ">
        {/* logo waala */}
        <div className="pl-4">
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
        {/* button waala */}
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
        {/* right side waala */}
        <div className="text-blue-500 font-bold mr-4">logo and stuff</div>
      </div>
      {/* neeche resizable waala  */}
      {/* temp fix giving this div padding from bottom and right to make it fuit on screen */}
      <div className="h-screen w-screen pb-20 -mb-20 pr-10">
        <ResizablePanelGroup
          direction="horizontal"
          // temp fix giving negative margin from right and bottom
          className="  bg-black space-x-1.5 ml-4 h-full w-full "
          // mr-2
          // ml-2
        >
          {/*  leftTop waala */}
          <ResizablePanel
            defaultSize={40}
            className="border-2  rounded-3xl h-full w-full  bg-[#1e1e1e]"
          >
            <Tabs defaultValue="description" className="">
              <TabsList className="flex space-x-8 w-full">
                <TabsTrigger value="description">
                  <Image
                    src={"/description.svg"}
                    alt=""
                    height={15}
                    width={15}
                  />
                  description
                </TabsTrigger>
                <TabsTrigger value="editorial">
                  <Image src={"/editorial.svg"} alt="" height={15} width={15} />
                  editorial
                </TabsTrigger>
                <TabsTrigger value="submission">submission</TabsTrigger>
                <TabsTrigger value="solutions">solutions</TabsTrigger>
              </TabsList>
              <TabsContent value="description">
                <Description {...problemData} />
              </TabsContent>
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
          {/* <Separator orientation="vertical" className="" /> */}
          <ResizableHandle className="bg-transparent" />

          {/* left waale dono */}

          <ResizablePanel
            defaultSize={60}
            className=" border-transparent rounded-3xl bgblack"
            // mt-1
          >
            <ResizablePanelGroup
              direction="vertical"
              className="border-2 rounded-3xl space-y-1.5"
            >
              <ResizablePanel
                defaultSize={60}
                className="border-2 rounded-3xl bg-[#1e1e1e]"
              >
                {/* <div className="w-full h-full">
                    <div className="flex items-center ml-5">
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
                            <SelectItem value="javascript">
                              Javascript
                            </SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <Separator />
                    <div className="h-full w-full">
                      <Editor
                        className="border-2 rounded-2xl"
                        height="100%"
                        language={language.toLowerCase()}
                        theme="vs-dark"
                        value={code}
                        onChange={(value) => setCode(value || "")}
                        options={{
                          minimap: { enabled: false },
                          fontSize: 20,
                          lineNumbers: "on",
                          roundedSelection: false,
                          scrollBeyondLastLine: false,
                          readOnly: false,
                          automaticLayout: true,
                          cursorStyle: "line",
                          cursorBlinking: "expand",
                        }}
                        defaultLanguage="java"
                      />
                    </div>
                  </div> */}
              </ResizablePanel>
              <ResizableHandle className="bg-transparent" />
              {/* <Separator className="bg-gray-600" /> */}
              <ResizablePanel
                defaultSize={40}
                className=" border-2 rounded-2xl  bg-[#1e1e1e]"
              >
                <Tabs defaultValue="testCase" className="ml-2 mt-2 ">
                  <TabsList className="space-x-4 ">
                    <TabsTrigger value="testCase">
                    
                      <Image src={"/testCheckBox.svg"} alt="" height={10} width={15}/>
                      Testcase
                    </TabsTrigger>
                    <TabsTrigger value="testCaseResult">
                      <Image src={"/testResult.svg"} alt="" height={10} width={17}/>

                      Test Result
                    </TabsTrigger>
                  </TabsList>
                  <Separator className="bg-gray-400" />

                  <TabsContent value="testCase">testCase</TabsContent>
                  <TabsContent value="testCaseResult">
                    testCaseResult
                  </TabsContent>
                </Tabs>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default Page;
