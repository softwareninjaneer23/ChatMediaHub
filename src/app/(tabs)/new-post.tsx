import { useLayoutEffect, useState } from "react";
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image, Platform, Modal } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Switch } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';

//custom
import { COLORS } from "../../constants";

export default function NewPostScreen() {
  const navigation = useNavigation();

  //state handlers
  const [postPrivacyModal, setPostPrivacyModal] = useState(false);
  const [anyViewerOption, setAnyViewOption] = useState(true);
  const [connectionViewerOption, setConnectionViewOption] = useState(false);
  const [groupViewerOption, setGroupViewOption] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState<string | null>(null);


    const router = useRouter();

    const togglePrivacyModalModal = () => {
    setPostPrivacyModal(!postPrivacyModal);
    };
  
  const anyViewerOptionItem = () => {
      setAnyViewOption(true);
      setConnectionViewOption(false);
      setGroupViewOption(false);
      setIsEnabled(false);
  }
  const connectionViewerOptionItem = () => {
    setAnyViewOption(false);
    setConnectionViewOption(true);
    setGroupViewOption(false);
        setIsEnabled(false);
  }
  const groupViewerOptionItem = () => {
    setAnyViewOption(false);
    setConnectionViewOption(false);
    setGroupViewOption(true);
    setIsEnabled(false);
  }
  const OptionBrandedItem = () => {
    setAnyViewOption(false);
    setConnectionViewOption(false);
    setGroupViewOption(false);
    setIsEnabled(true);
  }

   const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  //submit post sent
  const submitPostSent = () => {
    console.log("Your post data: ", postContent);

    setPostContent("");
    setImage(null);
    navigation.goBack();
  };

  //custom screen header called once
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={styles.headerCloseContainer}>
          {/*close post*/}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.headerGoBackContainer}
          >
            <Ionicons name="ios-close-sharp" size={24} color={COLORS.darkGray} />
          </TouchableOpacity>
          
          {/*user image*/}
          <View style={styles.headerImageItemContainer}>
            <Image
              source={{ uri: "https://media.licdn.com/dms/image/C5603AQFHIXLWOtfswQ/profile-displayphoto-shrink_400_400/0/1645002356456?e=1701907200&v=beta&t=CJPEusdm3m_c5HxQ3Fii9lb3h2M3ClJZ9ODpmTxjbWU" }}
              style={styles.headerImageItem}
            />
          </View>

          {/*post button*/}
          <TouchableOpacity
            onPress={togglePrivacyModalModal}
            style={styles.headerPostPrivacyContainer}
          >
            <Text style={styles.headerPostPrivacyTextItem}>
              {anyViewerOption
                ? "Anyone"
                : connectionViewerOption
                ? "Connections"
                : groupViewerOption
                ? "My groups"
                : "Anyone"
              }
              {" "}
            </Text>
            <AntDesign name="caretdown" size={10} color={COLORS.darkGray} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerOptionContainer}>
          {/*post timer*/}
          <TouchableOpacity
            onPress={() => console.log("post timer pressed")}
            style={styles.headerSetPostTimerContainer}
          >
            <MaterialIcons name="access-time" size={24} color={COLORS.darkGray} />
          </TouchableOpacity>
          
          {/*post button*/}
          <TouchableOpacity
            onPress={submitPostSent}
            style={styles.headerPostButtonContainer}
          >
            <Text style={styles.headerPostButtonTextItem}>Post</Text>
          </TouchableOpacity>
        </View>
      )
    })
  }, [submitPostSent])

  //privacy modal section
  function renderPrivacyPostModal() {
    return (
      <Modal
        visible={postPrivacyModal}
        transparent={true}
        animationType="slide"
        style={styles.privacyModalsInnerContainer}
      >
        <View style={styles.privacyModalsInnerShareContent}>
          {/*close modal section*/}
          <TouchableOpacity
            onPress={togglePrivacyModalModal}
            style={styles.privacyModalsActionContainer}
          >
            <AntDesign name="close" size={18} color={COLORS.white} />
          </TouchableOpacity>

          <View style={styles.privacyModalsSeparator} />

          {/*header modal section*/}
          <View style={styles.privacyModalsMainHeaderContainer}>
            <Text style={styles.privacyModalsMainHeaderTextItem}>Who can see your post?</Text>
          </View>

          {/*modal options*/}
          <View style={styles.privacyModalsOptionContainer}>
            {/*modal any items option*/}
            <View style={styles.privacyModalsOptionContent}>
              <View style={styles.privacyModalsOptionIconContent}>
                <FontAwesome5 name="globe-americas" size={18} color={COLORS.white}/>
              </View>

              <View style={styles.privacyModalsOptionTextContent}>
                <Text style={styles.privacyModalsOptionTextItem}>
                  Anyone
                </Text>
                <Text style={styles.privacyModalsOptionTextSmallItem}>
                  Anyone on or off Chat Media Hub
                </Text>
              </View>

              <TouchableOpacity
                onPress={anyViewerOptionItem}
                style={styles.privacyModalsOptionSelectorContainer}
              >
                {anyViewerOption
                  ?
                  <FontAwesome5 name="dot-circle" size={18} color={COLORS.greenActive} />
                  :
                  <Entypo name="circle" size={18} color={COLORS.darkGray} />
                }
              </TouchableOpacity>
            </View>

            {/*modal connection items option*/}
            <View style={styles.privacyModalsOptionContent}>
              <View style={styles.privacyModalsOptionIconContent}>
               <Entypo name="users" size={18} color={COLORS.white} />
              </View>

              <View style={styles.privacyModalsOptionTextContent}>
                <Text style={styles.privacyModalsOptionTextItem}>
                  Connections only
                </Text>
              </View>

              <TouchableOpacity
                onPress={connectionViewerOptionItem}
                style={styles.privacyModalsOptionSelectorContainer}
              >
                {connectionViewerOption
                  ?
                  <FontAwesome5 name="dot-circle" size={18} color={COLORS.greenActive} />
                  :
                  <Entypo name="circle" size={18} color={COLORS.darkGray} />
                }
              </TouchableOpacity>
            </View>

            {/*modal group items option*/}
            <View style={styles.privacyModalsOptionContent}>
              <View style={styles.privacyModalsOptionIconContent}>
                <FontAwesome name="group" size={18} color={COLORS.white} />
              </View>

              <View style={styles.privacyModalsOptionTextContent}>
                <Text style={styles.privacyModalsOptionTextItem}>
                  Group{"  "}<AntDesign name="caretright" size={14} color={COLORS.darkGray} />
                </Text>
              </View>

              <TouchableOpacity
                onPress={groupViewerOptionItem}
                style={styles.privacyModalsOptionSelectorContainer}
              >
                {groupViewerOption
                  ?
                  <FontAwesome5 name="dot-circle" size={18} color={COLORS.greenActive} />
                  :
                  <Entypo name="circle" size={18} color={COLORS.darkGray} />
                }
              </TouchableOpacity>
            </View>
          </View>

          {/*modal control options*/}
          <View style={styles.privacyModalsOptionControllersContainer}>
            {/*control comments*/}
            <View style={styles.privacyModalsOptionControllersContent}>
              <View style={styles.privacyModalsOptionControllerTextContent}>
                <Text style={styles.privacyModalsOptionTextItem}>
                  Comment control
                </Text>
                <Text style={styles.privacyModalsOptionTextSmallItem}>
                  Anyone
                </Text> 
              </View>

              <View style={styles.privacyModalsOptionControllerIconContent}>
                <AntDesign name="caretright" size={14} color={COLORS.darkGray} />
              </View>
            </View>

            {/*control partnership*/}
            <View style={styles.privacyModalsOptionControllersContent}>
              <View style={styles.privacyModalsOptionControllerTextContent}>
                <Text style={[styles.privacyModalsOptionTextItem, {
                  color: !isEnabled || !groupViewerOption || !connectionViewerOption || !anyViewerOption
                    ? COLORS.white
                    : COLORS.darkGray

                }]}>
                  Brand partnership{"  "}<AntDesign name="infocirlce" size={12} color={COLORS.darkGray} />
                </Text>
                <Text style={styles.privacyModalsOptionTextSmallItem}>
                  Off
                </Text> 
              </View>

              <View style={styles.privacyModalsOptionControllerIconContent}>
                <Switch
                  value={isEnabled}
                  onChange={OptionBrandedItem}
                  trackColor={{
                    false: COLORS.white,
                    true: COLORS.greenActive,
                  }}
                  thumbColor={COLORS.white}
                  style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  return (
    <View style={styles.screenPostContainer}>
      {/*text input*/}
      <View style={styles.textInputContainer}>
        <TextInput
          value={postContent}
          onChangeText={setPostContent}
          multiline
          scrollEnabled
          placeholder="Share your thoughts..."
          placeholderTextColor={COLORS.darkGray}
          style={styles.textInputItem}
          />
      </View>

      {/*show picked file*/}
      {image && (
        <View style={styles.chosenUserImageContainer}>
          <Image source={{ uri: image }} style={styles.chosenUserImageItem}/>
        </View>
      )}

      {/*image picker section*/}
      <View style={styles.imagePickerContainer}>
        {/*ai generator modal*/}
        <TouchableOpacity onPress={() => console.log("ai button pressed")}  style={styles.postAiContainer}>
          <SimpleLineIcons name="magic-wand" size={24} color={COLORS.lightBlue}/>
        </TouchableOpacity>

        {/*post attachments*/}
        <View style={styles.postAttachmentContainer}>
          {/*image picker section*/}
          <TouchableOpacity onPress={pickImage} style={styles.postAttachmentImageContainer}>
            <FontAwesome name="image" size={18} color={COLORS.white} />
          </TouchableOpacity>

          {/*plus picker section*/}
          <TouchableOpacity onPress={() => console.log("plus pressed")} style={styles.postAttachmentPlusContainer}>
            <AntDesign name="plus" size={18} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>

      {renderPrivacyPostModal()}
    </View>
  );
}

const styles = StyleSheet.create({
  screenPostContainer: {
    flex: 1,
  },

  //header left content section
  headerCloseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerGoBackContainer: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImageItemContainer: {
    marginHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImageItem: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    borderRadius: 30,
  },
  headerPostPrivacyContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  headerPostPrivacyTextItem: {
    color: COLORS.darkGray,
    fontSize: 14,
    fontWeight: "400",
  },

  //sort comment modal section
  privacyModalsInnerContainer: {
    flexDirection: "column",
  },
  privacyModalsInnerShareContent: {
    width: "100%",
    height: Platform.OS === "ios" ? "60%" : "66%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: Platform.OS === "ios" ? "100%" : "70%",
    alignSelf: "flex-end",
    borderRadius: 10,
    backgroundColor: COLORS.black,
  },
  privacyModalsActionContainer: {
    paddingHorizontal: 2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  privacyModalsOptionContainer: {
    marginTop: 15,
    flexDirection: "column",
  },
  privacyModalsOptionContent: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 30,
  },
  privacyModalsSeparator: {
    width: "13%",
    alignSelf: "center",
    marginVertical: 5,
    borderRadius: 20,
    borderBottomColor: COLORS.darkGray,
    borderBottomWidth:
      Platform.OS === "ios"
        ? StyleSheet.hairlineWidth * 15
        : StyleSheet.hairlineWidth * 10,
  },
  privacyModalsMainHeaderContainer: {
    marginTop:15,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  privacyModalsMainHeaderTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  privacyModalsOptionIconContent: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: COLORS.darkGray,
  },
  privacyModalsOptionTextContent: {
    width: Platform.OS ==="ios"?"78%": "70%",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  privacyModalsOptionTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
    opacity: 0.8,
  },
  privacyModalsOptionTextSmallItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.8,
  },
  privacyModalsOptionSelectorContainer: {
    width: "10%",
    marginTop: 10,
    marginHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  privacyModalsOptionControllersContainer: {
    justifyContent: "center",
    flexDirection: "column",
  },
  privacyModalsOptionControllersContent: {
    width: "100%",
    paddingRight: Platform.OS === "ios" ? 0 : 10,
    paddingLeft: Platform.OS === "ios" ? 10 : 15,
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 30,
  },
  privacyModalsOptionControllerTextContent: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  privacyModalsOptionControllerIconContent: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },

  //header right content section
  headerOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerSetPostTimerContainer: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  headerPostButtonContainer: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.darkGray,
  },
  headerPostButtonTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },

  //text input section
  textInputContainer: {
    padding: 15,
  },
  textInputItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
  },

  //chosen user image
  chosenUserImageContainer: {
    marginTop: "auto",
    marginBottom: 10,
  },
  chosenUserImageItem: {
    width: "100%",  
    aspectRatio:1,
    borderRadius: 15,
    resizeMode: "cover",
  },

  //image picker section
  imagePickerContainer: {
    marginTop: "auto",
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postAiContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "flex-start",
    marginHorizontal: 20,
  },
  postAttachmentContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  postAttachmentImageContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.darkGray,
  },
  postAttachmentPlusContainer: {
    padding: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.darkGray,
  },
});
