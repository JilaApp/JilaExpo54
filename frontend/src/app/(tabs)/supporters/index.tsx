import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons, AntDesign, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface SupporterCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  buttonText: string;
  isVerified?: boolean;
  onPress: () => void;
}

function SupporterCard({ icon, title, subtitle, buttonText, isVerified, onPress }: SupporterCardProps) {
  return (
    <View className="bg-[#F5F5DC] rounded-2xl p-4 mb-4 flex-row items-center shadow-sm">
      {/* Left Icon */}
      <View className="w-12 h-12 rounded-full bg-[#8B4513] items-center justify-center mr-4">
        {icon}
      </View>
      
      {/* Middle Text */}
      <View className="flex-1">
        <Text className="text-lg font-bold text-[#8B4513]">{title}</Text>
        <Text className="text-sm text-[#A0522D] mt-1">{subtitle}</Text>
      </View>
      
      {/* Right Button/Tag */}
      <View>
        {isVerified ? (
          <View className="bg-[#D2B48C] rounded-lg px-3 py-1.5">
            <Text className="text-xs font-medium text-[#8B4513]">PK Verified</Text>
          </View>
        ) : (
          <TouchableOpacity 
            className="bg-[#8B4513] rounded-lg px-4 py-2.5"
            onPress={onPress}
          >
            <Text className="text-white font-medium text-sm">{buttonText}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default function SupportersScreen() {
  const router = useRouter();

  const supporters = [
    {
      icon: <AntDesign name="shoppingcart" size={24} color="white" />,
      title: "El Progreso",
      subtitle: "Grocery/Market",
      buttonText: "Contact",
      onPress: () => console.log("Contact El Progreso"),
    },
    {
      icon: <Ionicons name="medical" size={24} color="white" />,
      title: "Clinic",
      subtitle: "Contact",
      buttonText: "Contact",
      isVerified: true,
      onPress: () => console.log("Contact Clinic"),
    },
    {
      icon: <MaterialIcons name="gavel" size={24} color="white" />,
      title: "Legal Aid Firm",
      subtitle: "Legal Services",
      buttonText: "Contact",
      onPress: () => console.log("Contact Legal Aid Firm"),
    },
    {
      icon: <FontAwesome5 name="dollar-sign" size={20} color="white" />,
      title: "Money Remittance",
      subtitle: "Contact",
      buttonText: "Contact",
      onPress: () => console.log("Contact Money Remittance"),
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#F5F5DC]">
      {/* Header */}
      <View className="bg-[#8B4513] px-4 py-6 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        
        <View className="flex-row items-center">
          <Ionicons name="people" size={24} color="white" />
          <Text className="text-white text-2xl font-bold ml-2">Supporters</Text>
        </View>
        
        <TouchableOpacity>
          <Ionicons name="help-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView className="flex-1 px-4 py-6" showsVerticalScrollIndicator={false}>
        {supporters.map((supporter, index) => (
          <SupporterCard
            key={index}
            icon={supporter.icon}
            title={supporter.title}
            subtitle={supporter.subtitle}
            buttonText={supporter.buttonText}
            isVerified={supporter.isVerified}
            onPress={supporter.onPress}
          />
        ))}
      </ScrollView>

      {/* Bottom Button */}
      <View className="px-4 pb-6">
        <TouchableOpacity 
          className="bg-[#8B4513] rounded-2xl py-4 items-center shadow-lg"
          onPress={() => console.log("Watch Now")}
        >
          <Text className="text-white text-lg font-bold">Watch Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
