import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import useTheme from "../hooks/useTheme";

interface CardSkillProps {
    id?: string
    imgSrc: string
    title: string
    children: string
    clasName?: string
    invertColor?: boolean
}

function CardSkill({ id, imgSrc, title, children, clasName, invertColor = false }: CardSkillProps) {
    const { theme } = useTheme();
    return (
        <Card id={id} className={"h-full galaxy-card-" + theme + " " + clasName} isPressable>
            <CardHeader className="flex gap-3">
                <Image
                    alt={title}
                    height={40}
                    radius="sm"
                    src={imgSrc}
                    width={40}
                    style={{ filter: invertColor ? 'invert(1)' : 'none' }}
                />
                <div className="flex flex-col">
                    <p className="text-md">{title}</p>
                </div>
            </CardHeader>
            <CardBody className="min-h-[calc(100%-64px)]">
                <p className="dark:text-gray-200 text-sm font-sans text-tiny">{children}</p>
            </CardBody>
        </Card>
    )
}

export default CardSkill