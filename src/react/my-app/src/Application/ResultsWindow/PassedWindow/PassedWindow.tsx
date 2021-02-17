import React from 'react'
import "./PassedWindow.css"
import { SubjectRender } from '../SubjectRender/SubjectRender'
import ApiHandler from '../../API/ApiHandler'


interface Subject {
    code: string,
    name: string,
    credits: number
}

interface PassedWindowState {
    data: any
}

interface PassedWindowProps {
    studentId: string
}

export class PassedWindow extends React.Component<PassedWindowProps, PassedWindowState> {

    constructor(props: any) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        new ApiHandler().getStudentData(this.props.studentId).then((d) => {
            this.setState({
                data: d
            });
        });
    }

    render() {
        if (!this.state.data.data) {
            return (<div className="passedWindow">
                <ul>{ }</ul>
            </div>);
        }
        const passed: Subject[] = this.state.data.data.passed;

        passed.sort(function (a: Subject, b: Subject) {
            var keyA = a.code;
            var keyB = b.code;
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        })

        const subjects = passed.map((s) => {
            return (
                <SubjectRender
                    key={s.code}
                    code={s.code}
                    name={s.name}
                    credits={s.credits}
                />
            );
        })

        return (
            <div className="passedWindow">
                <ul>{subjects}</ul>
            </div>
        );
    }
}
