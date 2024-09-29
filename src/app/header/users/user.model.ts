export interface Exercise {
    exerciseId: string,
    category: string,
    exerciseName: string,
    reps: string
}

export interface User {
    id: string,
    name: string,
    avatar: string,
    exercises: Exercise[] 
}

export interface SubmitUser {
    name: string,
    avatar: string,
}

export interface SubmitExercise{
    category: string,
    exerciseName: string,
    reps: string
}