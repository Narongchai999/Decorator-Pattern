class StudyBehavior {
    study() {
        throw new Error("This method must be implemented by subclasses");
    }
}

class SimpleStudy extends StudyBehavior {
    study() {
        return "ไม่เข้าเรียน";
    }
}

class StudyDecorator extends StudyBehavior {
    constructor(studyBehavior) {
        super();
        this.studyBehavior = studyBehavior;
    }

    study() {
        return this.studyBehavior.study();
    }
}

class ConcentratedStudy extends StudyDecorator {
    study() {
        return super.study() + " รวย";
    }
}

class GoodGrade extends ConcentratedStudy {
    study() {
        return super.study() + " รวยมาก";
    }
}

class GoodWork extends ConcentratedStudy {
    study() {
        return super.study() + " รวยมากมั้ง";
    }
}

function updateText() {
    const textArea = document.getElementById("text");
    let studyBehavior = new SimpleStudy();
    
    if (document.getElementById("checkbtn1").checked) {
        studyBehavior = new ConcentratedStudy(studyBehavior);
    }
    if (document.getElementById("checkbtn2").checked) {
        studyBehavior = new GoodGrade(studyBehavior);
    }
    if (document.getElementById("checkbtn3").checked) {
        studyBehavior = new GoodWork(studyBehavior);
    }

    textArea.value = studyBehavior.study();
}
