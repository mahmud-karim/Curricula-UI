import React from 'react'
import { Skill } from '../../models/skill';

interface ISkillPillProps {
    submitCurriciulum: (newCurriculum) => void
}

export class SkillPillComponent extends React.Component<ISkillPillProps, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            allSkills: []
        };
    }

    render() {
        return (
            <ul>
                {this.state.allSkills.map((s: Skill) => {
                    return <div>
                        <p>{s.skillName}</p>
                    </div>
                })}
            </ul>
        )
    }
}