import Merchandise from "../merchandise/merchandisee

export default class User {
    // USER ATTRIBUTES
    private first: string = '';
    private last: string = '';
    private userName: string = '';
    private phoneNumber: number = 0;
    private password: string = '';
    private awardPoint: number = 0;
    private cardNumber: number = 0; // might remove and place in Payment API
    private authorized: boolean = false; // determines if admin or not
    private cart: Merchandise[] = [];

    public constructor() {

    }
}