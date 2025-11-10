import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

export default function CompanionCard({ id, name, topic, subject, duration, color, }: CompanionCardProps
) {
    return (
        <article className="companion-card" style={{ backgroundColor: color }}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <Button
                    size="icon"
                    className="companion-bookmark rounded-full">
                    <Image
                        src="/icons/bookmark.svg"
                        alt="Bookmark"
                        width={15}
                        height={15} />
                </Button>
            </div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text">{topic}</p>
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/clock.svg"
                    alt="Duration"
                    width={14}
                    height={14}
                />
                <p className="text-sm">
                    {duration} minutes
                </p>
            </div>
            <Link href={`/companions/${id}`}>
                <Button variant="default" className="w-full rounded-3xl justify-center" >
                    Lauch Lesson
                </Button>
            </Link >
        </article>
    )
}