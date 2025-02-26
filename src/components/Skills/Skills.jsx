import {Skill} from "../index";
import {
    cssSkill,
    gitSkill,
    htmlSkill,
    jsSkill, muiSkill,
    reactSkill,
    reduxSkill,
    rnSkill, tailwindSkill,
    tsSkill
} from "../../helpers/devSkill/DevSkill";
import {useEffect, useState} from "react";


const Skills = () => {

    const [js, setJs] = useState(0)
    const [html, setHtml] = useState(0)
    const [css, setCss] = useState(0)
    const [reactJs, setReactJs] = useState(0)
    const [rn, setRn] = useState(0)
    const [tailwind, setTailwind] = useState(0)
    const [ts, setTs] = useState(0)
    const [redux, setRedux] = useState(0)
    const [git, setGit] = useState(0)
    const [mui, setMui] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setHtml(oldValue => {
                const num = Math.random() * 10
                return Math.min(oldValue + num, 70)
            })
            setCss(oldValue => {
                const num = Math.random() * 10
                return Math.min(oldValue + num, 65)
            })
            setJs(oldValue => {
                const num = Math.random() * 10
                return Math.min(oldValue + num, 73)
            })
            setReactJs(oldValue => {
                const num = Math.random() * 10
                return Math.min(oldValue + num, 55)
            })
            setRn(oldValue => {
                const num = Math.random() * 10
                return Math.min(oldValue + num, 85)
            })
            setRedux(oldValue => {
                const num = Math.random() * 10
                return Math.min(oldValue + num, 60)
            })
            setGit(oldValue => {
                const num = Math.random() * 10
                return Math.min(oldValue + num, 30)
            })
            setTailwind(oldValue => {
                const num = Math.random() * 10
                return Math.min(oldValue + num, 66)
            })
            setTs(oldValue => {
                const num = Math.random() * 10
                return Math.min(oldValue + num, 40)
            })
            setMui(oldValue => {
                const num = Math.random() * 10
                return Math.min(oldValue + num, 55)
            })
        }, 300)
        return () => {
            clearInterval(timer)
        }
    }, []);


    return (
        <>
            <Skill
                icon={htmlSkill.icon}
                color={htmlSkill.color}
                value={html}
                name={htmlSkill.name}
            />

            <Skill
                icon={cssSkill.icon}
                color={cssSkill.color}
                value={css}
                name={cssSkill.name}
            />

            <Skill
                icon={jsSkill.icon}
                color={jsSkill.color}
                value={js}
                name={jsSkill.name}
            />

            <Skill
                icon={tsSkill.icon}
                color={tsSkill.color}
                value={ts}
                name={tsSkill.name}
            />

            <Skill
                icon={reactSkill.icon}
                color={reactSkill.color}
                value={reactJs}
                name={reactSkill.name}
            />

            <Skill
                icon={rnSkill.icon}
                color={rnSkill.color}
                value={rn}
                name={rnSkill.name}
            />

            <Skill
                icon={reduxSkill.icon}
                color={reduxSkill.color}
                value={redux}
                name={reduxSkill.name}
            />

            <Skill
                icon={gitSkill.icon}
                color={gitSkill.color}
                value={git}
                name={gitSkill.name}
            />

            <Skill
                icon={tailwindSkill.icon}
                color={tailwindSkill.color}
                value={tailwind}
                name={tailwindSkill.name}
            />

            <Skill
                icon={muiSkill.icon}
                color={muiSkill.color}
                value={mui}
                name={muiSkill.name}
            />

        </>
    );
};

export default Skills;
