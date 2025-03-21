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

const DrinkCard = ({
    id,
    image,
    drink_name,
    price,
    base,
    milk,
    topping,
}: Drink) => {
    return (
        <Link href={`https://www.excelsior.com.mx/media/pictures/2024/11/21/3216015.jpg`} asChild>
            <TouchableOpacity className="w-30%">
                <Image
                    source={{
                        uri: image
                        ? `@/assets/images/${image}`
                        : `https://placehold.co/600x400/`
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />
                <Text className="text-sm font-bold text-white mt-2">{"Hello, World!"}</Text>
            </TouchableOpacity>
        </Link>
    );
};

export default DrinkCard;