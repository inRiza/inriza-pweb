import { cn } from "@/lib/utils";
import StackIcon from "tech-stack-icons";
import { DottedGlowBackground } from "@/components/background/dotted-glow-background";
import { EncryptedText } from "@/components/ui/encrypted-text";

interface props {
    className?: string;
};

export default function Approach({ className }: props) {
    return (
        <>
            <section id="apr1" className={cn(className, "w-full grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-4")}>
                <div className="col-span-1 md:col-span-2 row-span-1 shadow-xl bg-card border border-border rounded-xl group">
                    <div className="h-64 relative overflow-hidden px-4 py-8 rounded-xl">
                        <div className="absolute w-full left-0 top-0 h-[100px] bg-gradient-to-b from-background/40 to-transparent z-40 pointer-events-none rounded-xl" />
                        <div className="absolute w-full left-0 bottom-0 h-[200px] bg-gradient-to-b from-transparent to-background z-10 pointer-events-none rounded-xl" />
                        <div className="absolute right-[18px] w-[90%] container bg-card shadow-[-4px_2px_18px_0_rgba(0,0,0,0.1)] dark:shadow-[-4px_2px_18px_0_rgba(255,255,255,0.1)] shadow-foreground/20 border border-border rounded-xl h-50 group-hover:scale-95 group-hover:-translate-x-2 transition-all duration-600">
                            <pre className="flex flex-col p-4 text-sm">
                                <code className="group-hover:translate--62 group-hover:scale-500 group-hover:-rotate-2 transition-all duration-600">
                                    import {"{"} useState, useEffect {"}"} from{" "}
                                    <span className="group-hover:tracking-[3px] transition-all duration-1000">"react"</span>;
                                </code>
                                <code className="mt-8 group-hover:translate-x-220 group-hover:scale-220 group-hover:rotate-2 group-hover:translate-y-24 group-hover:blur-[1px] transition-all duration-600">{`interface props {
    reliable?: boolean;
    speed?: boolean;
    nice?: boolean;
    profit: number;
    revenue: number;
};`}</code>
                            </pre>
                        </div>
                        <h1 className="absolute z-20 bottom-[10px] text-xl text-shadow-md group-hover:translate-x-2 transition-all duration-600 text-foreground">
                            <span className="font-semibold">Detailed driven,</span> even this is hardcoded
                        </h1>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 shadow-xl bg-card border border-border rounded-xl group">
                    <div className="h-64 relative overflow-hidden px-4 py-6 rounded-xl">
                        <div className="absolute w-full left-0 top-0 h-25 bg-linear-to-b from-background to-transparent z-40 pointer-events-none rounded-xl" />
                        <div className="mt-10 relative flex gap-4 items-center justify-center group-hover:scale-800 transition-all duration-600">
                            <div className="flex flex-col items-center justify-start">
                                <div className="rounded-full border-4 bg-muted/10 h-14 w-14 shadow-xl flex items-center justify-center">
                                    <span className="font-semibold text-sm text-foreground">
                                        100
                                    </span>
                                </div>
                                <span className="text-xs text-muted-foreground/60 mt-5">
                                    Speed
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-start">
                                <div className="rounded-full border-4 bg-muted/10 h-14 w-14 shadow-xl flex items-center justify-center">
                                    <span className="font-semibold text-sm text-foreground">
                                        100
                                    </span>
                                </div>
                                <span className="text-xs text-muted-foreground/60 mt-5">
                                    Reliable
                                </span>
                            </div>
                            <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-[6px] z-50 transition-opacity duration-600">
                                nice
                            </span>
                            <div className="flex flex-col items-center justify-start">
                                <div className="rounded-full border-4 bg-muted/10 h-14 w-14 shadow-xl flex items-center justify-center">
                                    <span className="font-semibold text-sm text-foreground">
                                        100
                                    </span>
                                </div>
                                <span className="text-xs text-muted-foreground/60 mt-5">
                                    SEO
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-start">
                                <div className="rounded-full border-4 bg-muted/10 h-14 w-14 shadow-xl flex items-center justify-center">
                                    <span className="font-semibold text-sm text-foreground">
                                        100
                                    </span>
                                </div>
                                <span className="text-xs text-muted-foreground/60 mt-5">
                                    BP
                                </span>
                            </div>
                        </div>
                        <h1 className="absolute z-20 bottom-[34px] font-semibold text-xl text-shadow-md group-hover:translate-x-2 transition-all duration-600 text-foreground">
                            Scaling with perfections
                        </h1>
                        <p className="absolute z-20 bottom-[10px] text-sm font-extralight text-muted-foreground group-hover:translate-x-2 transition-all duration-600">
                            With intentions and infrastructure choices
                        </p>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 shadow-xl bg-card border border-border rounded-xl group">
                    <div className="h-64 relative overflow-hidden px-4 py-6 rounded-xl">
                        <div className="absolute w-full left-0 bottom-0 h-[50px] bg-gradient-to-b from-transparent to-background z-10 pointer-events-none rounded-xl" />
                        <div className="absolute w-full left-0 top-0 h-[70px] bg-gradient-to-b from-background to-transparent z-10 pointer-events-none rounded-xl" />
                        <StackIcon name="vuejs" className="grayscale opacity-20 w-12 h-12 -rotate-45 absolute left-0 top-0 top-[-2px] group-hover:translate-x-4 group-hover:translate-y-4 group-hover:scale-140 transition-all duration-600" />
                        <StackIcon name="nextjs2" className="grayscale opacity-10 w-24 h-24 rotate-45 absolute right-0 right-[-28px] top-0 top-[-22px] group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:scale-120 transition-all duration-600" />
                        <StackIcon name="typescript" className="grayscale opacity-10 w-18 h-18 rotate-8 absolute bottom-0 bottom-[14px] group-hover:translate-x-4 group-hover:translate-y-4 group-hover:scale-120 transition-all duration-600" />
                        <StackIcon name="go" className="grayscale opacity-10 w-28 h-28 -rotate-16 absolute bottom-0 bottom-[-12px] right-0 right-[12px] group-hover:scale-120 group-hover:translate-y-4 group-hover:-translate-x-4 transition-all duration-600" />
                        <StackIcon name="react" className="grayscale opacity-10 w-18 h-18 -rotate-16 absolute inset-0 m-auto bottom-[52px] group-hover:scale-108 group-hover:rotate-180 group-hover:opacity-100 transition-all duration-600" />
                        <div className="absolute z-20 bottom-[14px] text-xl font-light text-shadow-md group-hover:translate-x-2 transition-all duration-600 text-foreground">
                            Worked with over <span className="font-semibold">50+ stacks</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 shadow-xl bg-card rounded-xl group border border-border">
                    <div className="h-64 relative overflow-hidden px-4 py-6 rounded-xl">
                        <div className="absolute w-full left-0 bottom-0 h-[50px] bg-gradient-to-b from-transparent to-background z-10 pointer-events-none rounded-xl" />
                        <div className="absolute w-full left-0 top-0 h-[70px] bg-gradient-to-b from-background to-transparent z-10 pointer-events-none rounded-xl" />
                        <DottedGlowBackground
                            className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-60 group-hover:opacity-100 transition-all duration-600"
                            opacity={0.1}
                            gap={10}
                            radius={4}
                            colorLightVar="--color-accent-foreground"
                            glowColorLightVar="--color-accent-foreground"
                            colorDarkVar="--color-accent-foreground"
                            glowColorDarkVar="#ffff"
                            backgroundOpacity={0}
                            speedMin={0.3}
                            speedMax={1.6}
                            speedScale={1}
                        />
                        <EncryptedText
                            text='i do hash everything'
                            encryptedClassName="text-muted-foreground/60"
                            revealedClassName="text-foreground"
                            revealDelayMs={50}
                            loop={true}
                            pauseMs={2000}
                            className="absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center text-xl opacity-60 group-hover:opacity-80 transition-all duration-600"
                        />
                        <div className="absolute z-20 bottom-[14px] font-light text-xl text-shadow-md group-hover:translate-x-2 transition-all duration-600 text-foreground">
                            Secure <span className="font-semibold">end-to-end</span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 shadow-xl bg-card rounded-xl group border border-border">
                    <div className="h-64 relative overflow-hidden px-4 py-6 rounded-xl">
                        <div className="absolute w-full left-0 bottom-0 h-[70px] bg-gradient-to-b from-transparent to-background z-10 pointer-events-none rounded-xl" />
                        <div className="absolute w-full left-0 top-0 h-[40px] bg-gradient-to-b from-background to-transparent z-10 pointer-events-none rounded-xl" />
                        <div className="absolute left-0 left-[22px] top-[32px] rounded-xl py-2 px-4 bg-card border border-border">
                            <p className="text-muted-foreground text-sm">Can you do this feature?</p>
                        </div>
                        <div className="absolute right-0 right-[22px] top-[92px] max-w-[250px] rounded-xl py-2 px-4 bg-card border border-border opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 delay-0 group-hover:pointer-events-auto overflow-hidden min-w-[100px] flex items-center justify-center min-h-[40px]">
                            <div className="flex gap-1 items-center absolute inset-0 justify-center group-hover:opacity-0 transition-opacity duration-300 group-hover:delay-[900ms] delay-0">
                                <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:0ms]" />
                                <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:150ms]" />
                                <span className="w-1.5 h-1.5 bg-muted-foreground/60 rounded-full animate-bounce [animation-delay:300ms]" />
                            </div>
                            <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-[1000ms] delay-0">Nope.</p>
                        </div>
                        <div className="absolute z-20 bottom-[14px] font-light text-xl text-shadow-md group-hover:translate-x-2 transition-all duration-600 text-foreground">
                            <span className="font-semibold">Comm is key,</span> lets talk.
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}