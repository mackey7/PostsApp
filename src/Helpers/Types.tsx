interface company {
    name: string;
    catchPhrase: string;
    bs: string
}
interface geo {
    lat: string;
    lng: string;
}
interface address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: geo
}
export interface userDataTypes {
    id: number;
    name: string;
    username: string;
    address: address;
    phone: string;
    website: string;
    company: company;
    email: string;
}

export interface UserCardHomeTypes {
    users: userDataTypes[]
}

export interface UsersHomepage {
    users: UserCardHomeTypes
}

export interface UserCardTypes {
    UserData: userDataTypes
}

export interface UsersTypesComponent {
    UserData: userDataTypes[]
}

export interface AddPostInterface {
    id: number | string,
    showAddPostFn(): void
}
interface UserDetailsDataTypes {
    id: string | number,
    title: string,
    userId?: string,
}

export interface UserDetailsPostInterface {
    deletePostFn(id: number | string): void;
    data: UserDetailsDataTypes
}

export interface UserHeaderInterface {
    showAddPostFn(): void,

    user: UserHeaderArray
}

export interface UserHeaderArray {
    name?: string,

}
export interface HandleNameChangeInterface {
    target: HTMLInputElement;
}

export interface AddModal {
    AddCommentModalOpen: boolean

}

export interface AddModalInterface {
    AddCommentModalOpen: AddModal
}

export interface postComment {
    body?: string;
    email?: string;
    name?: string;
    id?: number;
    postId?: number
}

export interface postCommentArray {
    comments: postComment
}
export interface postCommentsInterface {
    comments: postCommentArray
}

export interface PostSingleInterface {
    userId: number | string;
    id: number | string;
    title: string;
    body: string;
}
export interface PostDetails {
    post: PostSingleInterface

}
export interface PostDetailsInterface {
    postDetails: PostDetails

}
export interface userInterface {
    user: userDataTypes

}
export interface UserDetailsInterface {
    user: userInterface
}


export interface AddPostModal {
    AddPostModalOpen: boolean
}

export interface AddPostModalInterface {
    AddPostModalOpen: AddPostModal
}

export interface PostSingleInterface {
    userId: number | string;
    id: number | string;
    title: string;
    body: string;
}
export interface PostsSingleArrayInterafce {
    posts: PostSingleInterface[];
}

export interface PostsArrayInterafce {
    posts: PostsSingleArrayInterafce;
}

export interface PostDetailsInterface {
    userdId?: number;
    id: number | string;
    title: string;
    body: string;

}

export interface userInterface {
    user: userDataTypes

}

export interface UserDetailsInterface {
    user: userInterface
}