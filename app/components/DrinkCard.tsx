interface Drink {
    id: number;
    drink_name: string;
    image: string;
    price: number;
    base: string;
    milk: string;
    topping: string;
}









import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View} from "react-native";

//import { images} from "@/assets/images";

const DrinkCard = ({  //constructor for the clickable drink cards on the menu. 
                        // should create all of them with the same dimensions and functionality
    id,
    image,
    drink_name,
    price,
    base,
    milk,
    topping,
}: Drink) => {
    return (
        <Link href={`https://placehold.co/600x400/`} asChild> //placeholder for now, will take you to respective item customization page
            <TouchableOpacity className="w-30%">
                <Image
                    source={{
                        uri: image
                        ? `https://placehold.co/600x400/`
                        : `https://placehold.co/600x400/`
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />
                <Text className="text-sm font-bold text-white mt-2">{"Drink info here"}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default DrinkCard;