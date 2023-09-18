import React, { useState } from "react";
import {
  Modal,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  ImageBackground,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  SimpleLineIcons,
  AntDesign,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";

//dummy data
import recentJobSearch from "../../../assets/data/recentJobSearch.json";
import recommendedJobs from "../../../assets/data/recommendedJobs.json";
import premiumData from "../../../assets/data/premiumData.json";
import premiumJobsList from "../../../assets/data/premiumJobsList.json";

//customs
import RecentJobsSearch from "./RecentJobsSearch";
import RecommendedJobListItem from "./RecommendedJobListItem";
import PremiumAccountItem from "./PremiumAccountItem";
import PremiumJobListItem from "./PremiumJobListItem";
import { COLORS } from "../../constants";

export default function JobListItems() {
  //state handler
  const [moreOptionModal, setMoreOptionModal] = useState(false);
  const [showAllRecentJobs, setShowAllRecentJobs] = useState(false);
  const [showAllRecommendedJobs, setShowAllRecommendedJobs] = useState(false);
  const [closeServices, setCloseServices] = useState(true);

  const toggleMoreOptionModal = () => {
    setMoreOptionModal(!moreOptionModal);
  };

  //show more or less recent jobs
  const toggleShowAllRecentJobs = () => {
    setShowAllRecentJobs(!showAllRecentJobs);
  };
  const toggleShowAllRecommendedJobs = () => {
    setShowAllRecommendedJobs(!showAllRecommendedJobs);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.recommendedJobContainer}
    >
      {/*my jobs section*/}
      <View style={styles.myJobTopSectionContainer}>
        {/*job text section*/}
        <View style={styles.myJobTextContainer}>
          <Ionicons name="ios-bookmark" size={20} color={COLORS.white} />
          <Text style={styles.myJobTextHeadingItem}>{"  "}My jobs</Text>
        </View>

        {/*drop down section*/}
        <View style={styles.dropDownContainer}>
          <TouchableOpacity
            onPress={toggleMoreOptionModal}
            style={styles.dropDownContent}
          >
            <Text style={styles.dropDownContentText}>More{"  "}</Text>
            <FontAwesome name="caret-down" size={18} color={COLORS.white} />
          </TouchableOpacity>
        </View>

        {/*more option*/}
        <Modal
          visible={moreOptionModal}
          transparent={true}
          animationType="slide"
          style={styles.modalInnerContainer}
        >
          <View style={styles.modalInnerShareContent}>
            <TouchableOpacity
              onPress={toggleMoreOptionModal}
              style={styles.modalActionContainer}
            >
              <AntDesign name="close" size={14} color={COLORS.white} />
            </TouchableOpacity>

            {/*modal options*/}
            <View style={styles.modalOptionContainer}>
              {/*modal items option*/}
              <View style={styles.modalOptionContent}>
                <View style={styles.modalOptionIconContent}>
                  <FontAwesome name="bell" size={14} color={COLORS.white} />
                </View>

                <View style={styles.modalOptionTextContent}>
                  <Text style={styles.modalOptionTextItem}>Job alerts</Text>
                </View>
              </View>

              {/*modal items option*/}
              <View style={styles.modalOptionContent}>
                <View style={styles.modalOptionIconContent}>
                  <Feather name="check" size={14} color={COLORS.white} />
                </View>

                <View style={styles.modalOptionTextContent}>
                  <Text style={styles.modalOptionTextItem}>
                    Demonstrate skills
                  </Text>
                </View>
              </View>

              {/*modal items option*/}
              <View style={styles.modalOptionContent}>
                <View style={styles.modalOptionIconContent}>
                  <Fontisto
                    name="prescription"
                    size={14}
                    color={COLORS.white}
                  />
                </View>

                <View style={styles.modalOptionTextContent}>
                  <Text style={styles.modalOptionTextItem}>Interview prep</Text>
                </View>
              </View>

              {/*modal items option*/}
              <View style={styles.modalOptionContent}>
                <View style={styles.modalOptionIconContent}>
                  <Ionicons
                    name="md-document-sharp"
                    size={14}
                    color={COLORS.white}
                  />
                </View>

                <View style={styles.modalOptionTextContent}>
                  <Text style={styles.modalOptionTextItem}>Resume Builder</Text>
                </View>
              </View>

              {/*modal items option*/}
              <View style={styles.modalOptionContent}>
                <View style={styles.modalOptionIconContent}>
                  <FontAwesome
                    name="youtube-play"
                    size={14}
                    color={COLORS.white}
                  />
                </View>

                <View style={styles.modalOptionTextContent}>
                  <Text style={styles.modalOptionTextItem}>
                    Job seeker guidance
                  </Text>
                </View>
              </View>

              {/*modal items option*/}
              <View style={styles.modalOptionContent}>
                <View style={styles.modalOptionIconContent}>
                  <FontAwesome5 name="cog" size={14} color={COLORS.white} />
                </View>

                <View style={styles.modalOptionTextContent}>
                  <Text style={styles.modalOptionTextItem}>
                    Application settings
                  </Text>
                </View>
              </View>

              <View style={styles.modalSeparator} />

              {/*modal items option*/}
              <View style={styles.modalOptionContent}>
                <View style={styles.modalOptionIconContent}>
                  <Feather name="edit" size={14} color={COLORS.white} />
                </View>

                <View style={styles.modalOptionTextContent}>
                  <Text style={styles.modalOptionTextItem}>
                    Post a free job
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      {/*recent job searches section*/}
      <View style={styles.recentJobSearchContainer}>
        {/*heading section*/}
        <View style={styles.recentJobSearchHeadingContent}>
          <View style={styles.recentJobTextContainer}>
            <Text style={styles.recentJobTextItem}>Recent job searches</Text>
          </View>

          <TouchableOpacity
            onPress={() => console.log("clear recent search list")}
            style={styles.recentJobActionTextContainer}
          >
            <Text style={styles.recentJobActionTextItem}>Clear</Text>
          </TouchableOpacity>
        </View>

        {/*list recent job section*/}
        <View style={styles.recentJobSearchListContainer}>
          {recentJobSearch
            .slice(0, showAllRecentJobs ? recentJobSearch.length : 3)
            .map((recent) => (
              <RecentJobsSearch key={recent.id} recent={recent} />
            ))}
        </View>

        {/*see more recent job items*/}
        <View style={styles.seeMoreRecentJobsContainer}>
          <TouchableOpacity
            onPress={toggleShowAllRecentJobs}
            style={styles.seeMoreRecentJobsContent}
          >
            <Text style={styles.seeMoreRecentJobsTextItem}>
              {showAllRecentJobs ? "See less " : "See more "}
            </Text>
            <Ionicons
              name={showAllRecentJobs ? "chevron-up" : "chevron-down"}
              size={16}
              color={COLORS.lightBlue}
              style={{ top: Platform.OS === "ios" ? 0 : 1 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/*recommended jobs section*/}
      <View style={styles.recommendedJobsContainer}>
        {/*heading section*/}
        <View style={styles.recommendedJobHeadingContainer}>
          <Text style={styles.recommendedJobHeadingTextItem}>
            Recommended for you
          </Text>
          <Text style={styles.recommendedJobSubHeadingTextItem}>
            Based on your profile and search history
          </Text>
        </View>

        {/*recommended job list section*/}
        <View style={styles.recommendedJobListMainContainer}>
          {recommendedJobs
            .slice(0, showAllRecommendedJobs ? recentJobSearch.length : 2)
            .map((recommend) => (
              <RecommendedJobListItem
                key={recommend.id}
                recommend={recommend}
              />
            ))}
        </View>

        {/*see more recommended jobs*/}
        <View style={styles.seeMoreRecommendedContainer}>
          <TouchableOpacity
            onPress={toggleShowAllRecommendedJobs}
            style={styles.seeMoreRecommendedJobsContent}
          >
            <Text style={styles.seeMoreRecommendedJobsTextItem}>
              {showAllRecommendedJobs ? "See less " : "See more "}
            </Text>
            <Ionicons
              name={showAllRecommendedJobs ? "chevron-up" : "chevron-down"}
              size={16}
              color={COLORS.lightBlue}
              style={{ top: Platform.OS === "ios" ? 0 : 1 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/*premium jobs section*/}
      <View style={styles.premiumJobsContainer}>
        {/*heading section*/}
        <View style={styles.premiumJobHeadingContainer}>
          <Text style={styles.premiumMainHeadingTextItem}>
            <FontAwesome name="square" size={10} color={COLORS.amber} /> p r e m
            i u m
          </Text>
          <Text style={styles.premiumJobHeadingTextItem}>
            Jobs where you're a top applicant
          </Text>
          <Text style={styles.premiumJobSubHeadingTextItem}>
            Based on your chances of hearing back
          </Text>
        </View>

        {/*premium advert for account section*/}
        <View style={styles.premiumAccountContainer}>
          {premiumData.map((premium) => (
            <PremiumAccountItem key={premium.id} premium={premium} />
          ))}
        </View>

        {/*recommend jobs section*/}
        <View style={styles.premiumAccountContainer}>
          {premiumJobsList.map((premiumJob) => (
            <PremiumJobListItem key={premiumJob.id} premiumJob={premiumJob} />
          ))}
        </View>

        {/*see more recommended jobs*/}
        <View style={styles.seeMorePremiumContainer}>
          <View style={styles.seeMorePremiumJobsContent}>
            <Text style={styles.seeMorePremiumJobsTextItem}>See all </Text>
            <MaterialIcons name="lock" size={12} color={COLORS.white} />
          </View>
        </View>
      </View>

      {/*services section*/}
      {closeServices ? (
        <View style={styles.servicesContainer}>
          {/*service image*/}
          <View style={styles.serviceImageContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
              }}
              style={styles.serviceImageItem}
            />
          </View>

          {/*service text section*/}
          <View style={styles.serviceTextContainer}>
            {/*text section*/}
            <View style={styles.serviceTextContent}>
              <Text style={styles.serviceTextItem}>
                Browse Chat Media Hub Service Pages to find consultants near you
              </Text>

              {/*icon section*/}
              <TouchableOpacity
                onPress={() => setCloseServices(false)}
                style={styles.serviceIconContent}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={14}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            </View>

            {/*button section*/}
            <TouchableOpacity
              onPress={() => console.log("find services pressed")}
              style={styles.serviceButtonContainer}
            >
              <Text style={styles.serviceButtonTextItem}>Find services</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}

      {/*safety tip section*/}
      <View style={styles.safetyContainer}>
        {/*safety heading section*/}
        <View style={styles.safetyHeadingContainer}>
          <Text style={styles.safetyHeadingTextItem}>
            Safety tips for your job search
          </Text>
        </View>

        {/*safety info section*/}
        <View style={styles.safetyInfoContainer}>
          {/*text section*/}
          <View style={styles.safetyInfoTextContainer}>
            <Text style={styles.safetyInfoTextHeadingItem}>
              Protect yourself from fraud in your job search
            </Text>

            <Text style={styles.safetyInfoTextItem}>Learn more</Text>
          </View>

          {/*image section*/}
          <View style={styles.safetyImageContainer}>
            <Image
              source={{
                uri: "https://www.freepnglogos.com/uploads/shield-png/shield-icon-noto-emoji-objects-iconset-google-21.png",
              }}
              style={styles.safetyImageItem}
            />
          </View>
        </View>

        {/*safety footer section*/}
        <View style={styles.safetyInfoFooterTextItemContainer}>
          <Text style={styles.safetyInfoFooterTextItem}>
            Protect yourself from fraud in your job search
          </Text>
        </View>
      </View>

      {/*open to work section*/}
      <View style={styles.safetyContainer}>
        {/*safety heading section*/}
        <View style={styles.safetyHeadingContainer}>
          <Text style={styles.safetyHeadingTextItem}>Open to work</Text>
          <Text style={styles.safetyHeadingTextInfoItem}>
            Recommend based on your activity
          </Text>
        </View>

        {/*safety info section*/}
        <View style={styles.safetyInfoContainer}>
          {/*text section*/}
          <View style={styles.safetyInfoTextContentContainer}>
            <Text style={styles.safetyInfoTextHeadingItem}>
              Show recruiters you're open to new job opportunities
            </Text>
          </View>

          {/*image section*/}
          <View style={styles.safetyImageContainer}>
            <ImageBackground
              source={{
                uri: "https://media.licdn.com/dms/image/D5612AQEGgFogiOMtTw/article-cover_image-shrink_720_1280/0/1687102860396?e=2147483647&v=beta&t=uWIcQ2E30bBn8xoI4zqEy7F0Ha6uuhuzMoErkI8JuBw",
              }}
              style={styles.safetyImageContainerItem}
            >
              <Image
                source={{
                  uri: "https://scontent-jnb1-1.xx.fbcdn.net/v/t39.30808-6/241160934_407333700735384_6753269422517740560_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_ohc=zDzQPY6dN6UAX-jKA1G&_nc_ht=scontent-jnb1-1.xx&oh=00_AfDndOo0h9TFFQ-x4Up4AP8fKsaWkjmbUW5Xb3GJ6FDtpg&oe=650AD12D",
                }}
                style={styles.safetyImageBottomItem}
              />
            </ImageBackground>
          </View>
        </View>

        {/*safety footer section*/}
        <View style={styles.safetyInfoFooterTextItemContainer}>
          <Text style={styles.safetyInfoFooterTextItem}>
            Increase your chances of getting a job sooner when you are
            #OpenToWork - you control who sees this.
          </Text>

          <View style={styles.safetyHeadingTextInfoContainer}>
            <Text style={styles.safetyHeadingTextInfoItem}>Get Started </Text>
            <Ionicons name="arrow-forward" size={14} color={COLORS.darkGray} />
          </View>
        </View>
      </View>

      {/*job seeker guidance section*/}
      <View style={styles.safetyContainer}>
        {/*safety heading section*/}
        <View style={styles.safetyHeadingContainer}>
          <Text style={styles.safetyHeadingTextItem}>Job seeker guidance</Text>
          <Text style={styles.safetyHeadingTextInfoItem}>
            Recommend based on your activity
          </Text>
        </View>

        {/*safety info section*/}
        <View style={styles.safetyInfoContainer}>
          {/*text section*/}
          <View style={styles.safetyInfoTextContentContainer}>
            <Text style={styles.safetyInfoTextHeadingItem}>
              I want to improve my resume
            </Text>
          </View>

          {/*image section*/}
          <View style={styles.safetyImageContainer}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?w=360",
              }}
              style={styles.safetyImageJobItem}
            />
          </View>
        </View>

        {/*safety footer section*/}
        <View style={styles.safetyInfoFooterTextItemContainer}>
          <Text style={styles.safetyInfoFooterTextItem}>
            Explore our curated guide of expert-led courses, such as how to
            improve your resume and grow your network, to help you land your
            next opportunity.
          </Text>

          <View style={styles.safetyHeadingTextInfoContainer}>
            <Text style={styles.safetyHeadingTextInfoItem}>Show more </Text>
            <Ionicons name="arrow-forward" size={14} color={COLORS.darkGray} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  recommendedJobContainer: {
    flexDirection: "column",
  },

  //my job top section
  myJobTopSectionContainer: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.reechGray,
    marginBottom: 15,
  },
  myJobTextContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  myJobTextHeadingItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
  },

  //drop down section
  dropDownContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dropDownContent: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: COLORS.darkGray,
  },
  dropDownContentText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
  },

  //modal section
  modalInnerContainer: {
    flexDirection: "column",
  },
  modalInnerShareContent: {
    width: "48%",
    height: Platform.OS === "ios" ? "25%" : "33%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: Platform.OS === "ios" ? "25%" : "18%",
    alignSelf: "flex-end",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.darkGray,
    backgroundColor: COLORS.black,
  },
  modalActionContainer: {
    paddingHorizontal: 2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  modalOptionContainer: {
    marginTop: 5,
    flexDirection: "column",
  },
  modalOptionContent: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  modalSeparator: {
    width: "100%",
    marginVertical: 5,
    borderBottomColor: COLORS.darkGray,
    borderBottomWidth: StyleSheet.hairlineWidth * 1.5,
  },
  modalOptionIconContent: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalOptionTextContent: {
    width: "88%",
    marginLeft: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  modalOptionTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
    opacity: 0.5,
  },

  //recent job section
  recentJobSearchContainer: {
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "column",
    backgroundColor: COLORS.reechGray,
    marginBottom: 15,
  },
  recentJobSearchHeadingContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recentJobTextContainer: {
    width: "85%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  recentJobTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  recentJobActionTextContainer: {
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  recentJobActionTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },

  //recent jobs items section
  recentJobSearchListContainer: {
    marginTop: 10,
  },
  seeMoreRecentJobsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  seeMoreRecentJobsContent: {
    width: "35%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  seeMoreRecentJobsTextItem: {
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },

  //recommended jobs sections
  recommendedJobsContainer: {
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "column",
    backgroundColor: COLORS.reechGray,
    marginBottom: 15,
  },
  recommendedJobHeadingContainer: {
    flexDirection: "column",
    marginBottom: 15,
  },
  recommendedJobHeadingTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  recommendedJobSubHeadingTextItem: {
    marginTop: 2,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  recommendedJobListMainContainer: {
    marginTop: 5,
  },
  seeMoreRecommendedContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  seeMoreRecommendedJobsContent: {
    width: "35%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  seeMoreRecommendedJobsTextItem: {
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },

  //premium jobs section
  premiumJobsContainer: {
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "column",
    borderTopColor: COLORS.amber,
    borderTopWidth: 2,
    backgroundColor: COLORS.reechGray,
    marginBottom: 15,
  },
  premiumJobHeadingContainer: {
    flexDirection: "column",
    marginBottom: 15,
  },
  premiumMainHeadingTextItem: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: "600",
    opacity: 0.5,
    textTransform: "uppercase",
  },
  premiumJobHeadingTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 2,
  },
  premiumJobSubHeadingTextItem: {
    marginTop: 2,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },

  //premium account top section
  premiumAccountContainer: {
    marginTop: 10,
  },
  seeMorePremiumContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  seeMorePremiumJobsContent: {
    width: "35%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  seeMorePremiumJobsTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },

  //services section
  servicesContainer: {
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: "row",
    backgroundColor: COLORS.reechGray,
    marginBottom: 15,
  },
  serviceImageContainer: {
    width: "18%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  serviceImageItem: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  serviceTextContainer: {
    width: "82%",
    flexDirection: "column",
  },
  serviceTextContent: {
    width: "94%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  serviceTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
  serviceIconContent: {
    width: "6%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  serviceButtonContainer: {
    width: "35%",
    marginTop: 5,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.lightBlue,
    backgroundColor: COLORS.transparent,
  },
  serviceButtonTextItem: {
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },

  //safety section
  safetyContainer: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: 15,
    flexDirection: "column",
    backgroundColor: COLORS.reechGray,
    marginBottom: 15,
  },
  safetyHeadingContainer: {
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "column",
    marginBottom: 8,
  },
  safetyHeadingTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
  safetyHeadingTextInfoItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  safetyHeadingTextInfoContainer: {
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  safetyInfoContainer: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.darkBlue,
  },
  safetyInfoTextContainer: {
    width: "80%",
    flexDirection: "column",
  },
  safetyInfoTextContentContainer: {
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
  },
  safetyInfoTextHeadingItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 5,
  },
  safetyInfoTextItem: {
    color: COLORS.lightBlue,
    fontSize: 12,
    fontWeight: "600",
  },
  safetyImageContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  safetyImageContainerItem: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 48,
    backgroundColor: COLORS.white,
  },
  safetyImageItem: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 40,
  },
  safetyImageBottomItem: {
    width: 34,
    height: 34,
    resizeMode: "cover",
    borderRadius: 34,
  },
  safetyImageJobItem: {
    width: 50,
    height: 40,
    resizeMode: "cover",
  },
  safetyInfoFooterTextItemContainer: {
    marginTop: 5,
    paddingHorizontal: 15,
  },
  safetyInfoFooterTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "500",
  },
});
