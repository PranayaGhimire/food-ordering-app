import { StyleSheet, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react-native";
const Contact = () => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <SafeAreaView
      className={`${isDarkMode && "bg-stone-800"} flex-1 p-5 gap-5`}
    >
      <Text className={`${isDarkMode && "text-white"} text-xl font-semibold`}>
        Contact Us
      </Text>
      <Text className={`${isDarkMode && "text-white"} text-xl font-semibold`}>
        Get In Touch
      </Text>
      <Text className={`${isDarkMode && "text-white"} text-[18px]`}>
        Have questions about our service or need help for home delivery of food
        ? Reach out to us anytime and our friendly team will assist you.
      </Text>
      <Card
        className={`${isDarkMode ? "bg-stone-600" : "bg-white"} w-full max-w-sm border-0 shadow-md border-t-4 border-t-cyan-500`}
      >
        <CardHeader className="flex-row">
          <View className="flex-1 gap-1.5">
            <CardTitle className={`${isDarkMode && "text-white"} text-xl`}>
              Send Us A Message
            </CardTitle>
            <CardDescription
              className={`${isDarkMode && "text-white"} text-[18px]`}
            >
              Enter your details to send us a message
            </CardDescription>
          </View>
        </CardHeader>
        <CardContent>
          <View className="w-full justify-center gap-4">
            <View className="gap-2">
              <Label
                htmlFor="email"
                className={`${isDarkMode && "text-white"} text-xl`}
              >
                {" "}
                Your Email
              </Label>
              <Input
                id="email"
                placeholder="m@example.com"
                className={`${isDarkMode ? "bg-stone-300" : "bg-stone-200"} p-2 border-0`}
              />
            </View>
            <View className="gap-2">
              <Label
                htmlFor="name"
                className={`${isDarkMode && "text-white"} text-xl`}
              >
                Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                className={`${isDarkMode ? "bg-stone-300" : "bg-stone-200"} p-2 border-0`}
              />
            </View>
            <View className="gap-2">
              <Label
                htmlFor="message"
                className={`${isDarkMode && "text-white"} text-xl`}
              >
                Your Message
              </Label>
              <Textarea
                id="name"
                placeholder="Write a message"
                className={`${isDarkMode ? "bg-stone-300" : "bg-stone-200"} p-2 border-0`}
              />
            </View>
          </View>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button className="w-full bg-cyan-500 active:bg-cyan-600">
            <Text className="text-white text-xl">Send Message</Text> <Mail color={'white'} size={20}/>
          </Button>
        </CardFooter>
      </Card>
    </SafeAreaView>
  );
};

export default Contact;

const styles = StyleSheet.create({});
