import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Text, View } from "../components/Themed";

//custom
import { COLORS, images } from "../../src/constants";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />

      {/*modal main content*/}
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/originals/24/df/32/24df32d4b337956fc6d3f3bbe7c065b0.gif",
        }}
        style={styles.modalTopSection}
      >
        {/* developer image */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.developerImageContainer}
        >
          <Image source={images.developer} style={styles.developerImageItem} />

          <View style={styles.developerNameTextContainer}>
            <Text style={styles.developerNameText}>Neo Mokhele</Text>

            <Text style={styles.developerBioTextContainer}>
              <Text style={styles.developerBioText}>
                📱{" "}
                <Text style={{ fontWeight: "bold" }}>
                  Frontend Mobile Expo Developer
                </Text>{" "}
                {"\n\n"}Hi, I'm Neo Mokhele, a passionate frontend mobile
                developer specializing in Expo, the cutting-edge platform for
                building high-quality mobile applications. With a strong
                background in mobile app development and a keen eye for
                user-centric design, I create immersive and engaging experiences
                for iOS and Android users.
                {"\n\n"}{" "}
                <Text style={{ fontWeight: "bold" }}>
                  What I Bring to the Table:
                </Text>{" "}
                {"\n\n"}✨{" "}
                <Text style={{ fontWeight: "bold" }}>Expertise in Expo</Text>: I
                have mastered the Expo framework, leveraging its powerful
                capabilities to accelerate app development, optimize
                performance, and ensure cross-platform compatibility. {"\n\n"}🎨
                <Text style={{ fontWeight: "bold" }}> UI/UX Excellence:</Text> I
                believe that beautiful design and seamless user experiences are
                at the heart of every successful app. I'm adept at creating
                visually stunning and intuitive interfaces that keep users
                coming back for more. {"\n\n"}🚀{" "}
                <Text style={{ fontWeight: "bold" }}>
                  Performance Optimization:
                </Text>{" "}
                I'm all about speed and efficiency. I implement best practices
                to make sure your app runs smoothly and efficiently on all
                devices. {"\n\n"}🔒{" "}
                <Text style={{ fontWeight: "bold" }}>Security Conscious:</Text>{" "}
                User data security is paramount. I take pride in implementing
                robust security measures to safeguard sensitive information
                within your app. {"\n\n"}
                <Text style={{ fontWeight: "bold" }}>
                  🌐 Cross-Platform Proficiency:
                </Text>{" "}
                I'm well-versed in developing applications that work flawlessly
                on both iOS and Android, saving time and resources. {"\n\n"}📊{" "}
                <Text style={{ fontWeight: "bold" }}>Data-Driven:</Text> I love
                data! I use analytics to make informed decisions and continually
                improve app performance and user engagement. {"\n\n"}
                <Text style={{ fontWeight: "bold" }}>
                  🤝 Collaborative Team Player:
                </Text>{" "}
                I thrive in collaborative environments. I'm a great
                communicator, working closely with designers, backend
                developers, and stakeholders to bring ideas to life. {"\n\n"}
                <Text style={{ fontWeight: "bold" }}>
                  Let's Build Something Amazing:
                </Text>{" "}
                If you're looking to transform your app idea into a reality or
                need to enhance an existing app, let's connect! Together, we can
                create mobile experiences that captivate and delight users while
                achieving your business goals. {"\n\n"}Let's work together to
                turn your vision into a stunning mobile reality. Feel free to
                reach out, and let's get started!
              </Text>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  //modal main content
  modalTopSection: {
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  developerImageContainer: {
    flexDirection: "column",
    marginBottom: 40,
  },
  developerImageItem: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 150,
    alignSelf: "center",
  },
  developerNameTextContainer: {
    marginTop: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: COLORS.transparent,
  },
  developerNameText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
  developerBioTextContainer: {
    marginTop: 20,
    padding: 10,
    borderCurve: "circular",
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 10,
    backgroundColor: COLORS.reechGray,
  },
  developerBioText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
});
