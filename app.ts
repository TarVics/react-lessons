// 1. створити інтерфейс на основі цього об'єкта:
//    Зверніть увагу там де масиви... в них може бути багато однотипних об'єктів

interface ISpaceXStageCore {
    flight: number;
    core: {
        reuse_count: number;
        status: string;
    }
}

interface ISpaceXStagePayload {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}

interface ISpaceXRocket {
    rocket_name: string;
    first_stage: {
        cores: ISpaceXStageCore[];
    }
    second_stage: {
        payloads: ISpaceXStagePayload[];
    }
}

interface ISpaceX {
    mission_name: string;
    launch_date_local: Date;
    launch_site: {
        site_name_long: string;
    },
    links: {
        article_link: string;
        video_link: string;
    },
    rocket: ISpaceXRocket;
}

// 2. Виконати типізацію функцій:

enum Gender {
    male = 'male',
    female = 'female'
}

type IUser = {
    name: string;
    age: number;
    gender: Gender;
}

const user: IUser = {
    name: "Max",
    age: 18,
    gender: Gender.male
}

function sum(a: number, b: number): number {
    return a + b;
}

function showSum(a, b: number): void {
    console.log(a + b);
}

function incAge(someUser: IUser, inc: number): IUser {
    someUser.age += inc;
    return someUser;
}

console.log(sum(1, 2));
showSum(2,3)
incAge(user, 2)

console.log(user);