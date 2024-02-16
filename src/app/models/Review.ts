import { User } from "./User";

export class Review{

  private reviewId !: number;
	private reviewTitle !: string;
	private reviewDesc !: string;
	private pros !: string;
	private cons !: string;
	private rating !: number;
	private reviewDate !: string;
	private userId !: number;
	private productId !: number;
	private productName !: string;
	private userDto !: User;
	private status !: string;
	private verified !: boolean;

}
