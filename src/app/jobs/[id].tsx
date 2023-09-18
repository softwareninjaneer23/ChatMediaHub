import React, { useState, useEffect } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import {
  AntDesign,
  Feather,
  FontAwesome,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

//custom
import recommendedJobs from "../../../assets/data/recommendedJobs.json";
import premiumData from "../../../assets/data/premiumData.json";
import { RecommendedJobList } from "../../types";
import PremiumAccountItem from "../../components/jobs/PremiumAccountItem";
import { COLORS } from "../../constants";

export default function JobDetailsScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  //store the selected job
  const [job, setJob] = useState<RecommendedJobList | null>(null);

  //load the job data based on id
  useEffect(() => {
    const selectedJob = recommendedJobs.find((item) => item.id === id);

    // Update the job state if a matching job is found
    if (selectedJob) {
      setJob(selectedJob);
      navigation.setOptions({
        title: selectedJob.companyName,
      });
    }
  }, [id, navigation]);

  //state handler
  const [saved, setSaved] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [following, setFollowing] = useState(false);
  const [moreOptionModal, setMoreOptionModal] = useState(false);
  const [shareOptionModal, setShareOptionModal] = useState(false);

  const toggleMoreOptionModal = () => {
    setMoreOptionModal(!moreOptionModal);
  };

  const toggleShareOptionModal = () => {
    setShareOptionModal(!shareOptionModal);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.jobDetailsContainer}
    >
      {job && (
        <View style={styles.jobSectionContainer}>
          {/*header section*/}
          <View style={styles.jobHeaderSectionContainer}>
            {/*header title section*/}
            <View style={styles.jobTitleContentContainer}>
              {/*title*/}
              <View style={styles.jobTitleContent}>
                <Text numberOfLines={4} style={styles.jobTitleHeadingTextItem}>
                  {job.jobTitle}
                </Text>
              </View>

              {/*icons*/}
              <View style={styles.jobIconContainer}>
                <FontAwesome
                  onPress={toggleShareOptionModal}
                  name="share"
                  size={20}
                  color={COLORS.white}
                />
                <FontAwesome
                  onPress={toggleMoreOptionModal}
                  name="ellipsis-h"
                  size={20}
                  color={COLORS.white}
                />
              </View>

              {/*share option modal*/}
              <Modal
                visible={shareOptionModal}
                transparent={true}
                animationType="slide"
                style={styles.modalInnerContainer}
              >
                <View style={styles.modalInnerShareContent}>
                  <TouchableOpacity
                    onPress={toggleShareOptionModal}
                    style={styles.modalActionContainer}
                  >
                    <AntDesign name="close" size={14} color={COLORS.white} />
                  </TouchableOpacity>

                  {/*modal options*/}
                  <View style={styles.modalOptionContainer}>
                    {/*top section*/}
                    <View style={styles.topModalHeadingContainer}>
                      <Text style={styles.topModalHeadingTextItem}>
                        Share on Social Media Hub
                      </Text>
                    </View>

                    {/*modal items option*/}
                    <View style={styles.modalOptionContent}>
                      <View style={styles.modalOptionIconContent}>
                        <SimpleLineIcons
                          name="pencil"
                          size={14}
                          color={COLORS.white}
                        />
                      </View>

                      <View style={styles.modalOptionTextContent}>
                        <Text style={styles.modalOptionTextItem}>
                          Repost to feed
                        </Text>
                      </View>
                    </View>

                    {/*modal items option*/}
                    <View style={styles.modalOptionContent}>
                      <View style={styles.modalOptionIconContent}>
                        <FontAwesome
                          name="send"
                          size={14}
                          color={COLORS.white}
                        />
                      </View>

                      <View style={styles.modalOptionTextContent}>
                        <Text style={styles.modalOptionTextItem}>
                          Send in a message
                        </Text>
                      </View>
                    </View>

                    <View style={styles.modalSeparator} />

                    {/*top section*/}
                    <View style={styles.topModalHeadingContainer}>
                      <Text style={styles.topModalHeadingTextItem}>
                        Other options
                      </Text>
                    </View>

                    {/*modal items option*/}
                    <View style={styles.modalOptionContent}>
                      <View style={styles.modalOptionIconContent}>
                        <Feather name="link" size={14} color={COLORS.white} />
                      </View>

                      <View style={styles.modalOptionTextContent}>
                        <Text style={styles.modalOptionTextItem}>
                          Other link
                        </Text>
                      </View>
                    </View>

                    {/*modal items option*/}
                    <View style={styles.modalOptionContent}>
                      <View style={styles.modalOptionIconContent}>
                        <Ionicons
                          name="logo-twitter"
                          size={14}
                          color={COLORS.white}
                        />
                      </View>

                      <View style={styles.modalOptionTextContent}>
                        <Text style={styles.modalOptionTextItem}>Twitter</Text>
                      </View>
                    </View>

                    {/*modal items option*/}
                    <View style={styles.modalOptionContent}>
                      <View style={styles.modalOptionIconContent}>
                        <Ionicons
                          name="logo-facebook"
                          size={14}
                          color={COLORS.white}
                        />
                      </View>

                      <View style={styles.modalOptionTextContent}>
                        <Text style={styles.modalOptionTextItem}>Facebook</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>

              {/*more option modal*/}
              <Modal
                visible={moreOptionModal}
                transparent={true}
                animationType="slide"
                style={styles.modalInnerContainer}
              >
                <View style={styles.modalInnerContent}>
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
                        <Feather name="edit" size={14} color={COLORS.white} />
                      </View>

                      <View style={styles.modalOptionTextContent}>
                        <Text style={styles.modalOptionTextItem}>
                          Send feedback
                        </Text>
                      </View>
                    </View>

                    {/*modal items option*/}
                    <View style={styles.modalOptionContent}>
                      <View style={styles.modalOptionIconContent}>
                        <Ionicons
                          name="ios-flag-sharp"
                          size={14}
                          color={COLORS.white}
                        />
                      </View>

                      <View style={styles.modalOptionTextContent}>
                        <Text style={styles.modalOptionTextItem}>
                          Report this job
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>

            {/*header job details section*/}
            <View style={styles.jobDetailsContentContainer}>
              <View style={styles.jobDetailItemContent}>
                <Text style={styles.jobDetailTextItem}>
                  {job.companyName} ·{" "}
                </Text>
                <Text style={styles.jobDetailTextItem}>
                  {job.companyLocation}{" "}
                </Text>
                <Text style={styles.jobDetailOtherTextItem}>
                  ({job.jobType}){" "}
                </Text>
                <Text style={styles.jobDetailOtherTextItem}>
                  {job.postedDate} ·{" "}
                </Text>
                <Text style={styles.jobDetailOtherTextItem}>
                  {job.numberOfApplicants} applicants
                </Text>
              </View>
            </View>

            {/*job more details*/}
            <View style={styles.moreDetailsAboutJobContainer}>
              {/*job type*/}
              <View style={styles.moreDetailsContentWrapper}>
                <View style={styles.detailsIconContainer}>
                  <FontAwesome
                    name="briefcase"
                    size={14}
                    color={COLORS.white}
                  />
                </View>

                <View style={styles.detailsIconDescriptionContainer}>
                  <Text style={styles.detailsIconDescriptionItem}>
                    {job.jobType}
                  </Text>
                </View>
              </View>

              {/*total employees*/}
              <View style={styles.moreDetailsContentWrapper}>
                <View style={styles.detailsIconContainer}>
                  <FontAwesome
                    name="building-o"
                    size={14}
                    color={COLORS.white}
                  />
                </View>

                <View style={styles.detailsIconDescriptionContainer}>
                  <Text style={styles.detailsIconDescriptionItem}>
                    {job.employeeTotal} employees ·{" "}
                    {job.followers >= 1000000
                      ? `${(job.followers / 1000000).toFixed(0)}M`
                      : job.followers >= 1100000
                      ? `${(job.followers / 1000000).toFixed(1)}M`
                      : job.followers >= 1000
                      ? `${(job.followers / 1000).toFixed(1)}K`
                      : job.followers}{" "}
                    followers
                  </Text>
                </View>
              </View>

              {/*connections count*/}
              <View style={styles.moreDetailsContentWrapper}>
                <View style={styles.detailsIconContainer}>
                  <Ionicons name="people" size={14} color={COLORS.white} />
                </View>

                <View style={styles.detailsIconDescriptionContainer}>
                  <Text style={styles.detailsIconDescriptionItem}>
                    {job.connectionWhoWorkHere.length} connection works here ·{" "}
                    {job.noOfAlumni} school alumni work here
                  </Text>
                </View>
              </View>

              {/*premium action*/}
              <View style={styles.moreDetailsContentWrapper}>
                <View style={styles.detailsIconContainer}>
                  <MaterialCommunityIcons
                    name="lightbulb-on-outline"
                    size={14}
                    color={COLORS.white}
                  />
                </View>

                <View style={styles.detailsIconDescriptionsContainer}>
                  <Text style={styles.detailsIconDescriptionItem}>
                    {job.numberOfApplicants === 0
                      ? null
                      : "See how you compare to " +
                        `${job.numberOfApplicants}` +
                        " applicants."}{" "}
                    <Text style={styles.detailsIconDescriptionUnderlineItem}>
                      retry premium free
                    </Text>
                  </Text>
                </View>
              </View>

              {/*number of skills type*/}
              <View style={styles.moreDetailsContentWrapper}>
                <View style={styles.detailsIconContainer}>
                  <MaterialCommunityIcons
                    name="format-list-checks"
                    size={14}
                    color={COLORS.white}
                  />
                </View>

                <View style={styles.detailsIconDescriptionContainer}>
                  <Text style={styles.detailsIconDescriptionItem}>
                    3 of 3 skills match your profile - you may be a good fit
                  </Text>
                </View>
              </View>
            </View>

            {/*button section*/}
            <View style={styles.jobButtonSectionContainer}>
              {/*apply button*/}
              {job.isEasyApply ? (
                <TouchableOpacity
                  onPress={() => console.log("apply for job pressed")}
                  style={styles.jobButtonApplyContainer}
                >
                  <Foundation
                    name="social-linkedin"
                    size={14}
                    color={COLORS.black}
                  />
                  <Text style={styles.jobButtonTextItem}>{"  "}Easy Apply</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => console.log("external apply for job pressed")}
                  style={styles.jobButtonApplyContainer}
                >
                  <Text style={styles.jobButtonTextItem}>Apply{"  "}</Text>
                  <SimpleLineIcons
                    name="share-alt"
                    size={14}
                    color={COLORS.black}
                  />
                </TouchableOpacity>
              )}

              {/*save button*/}
              <TouchableOpacity
                onPress={() => setSaved(!saved)}
                style={styles.jobButtonSaveContainer}
              >
                <Text style={styles.jobButtonSaveTextItem}>
                  {saved ? "Saved" : "Save"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*meet hiring team section*/}
          {job.recruiterDetails !== null ? (
            <>
              {job.recruiterDetails.map((recruiter, i) => (
                <View key={i} style={styles.meetHiringTeamContainer}>
                  <View style={styles.meetHiringTextContainer}>
                    <Text style={styles.meetHiringTextItem}>
                      Meet the hiring team
                    </Text>
                  </View>

                  {/*recruiter details section*/}
                  <View style={styles.recruiterDetailsContainer}>
                    {/*recruiter image section*/}
                    <View style={styles.recruiterImageContainer}>
                      <Image
                        source={{ uri: recruiter.recruiterImage }}
                        style={styles.recruiterImageItem}
                      />
                    </View>

                    {/*recruiter text section*/}
                    <View style={styles.recruiterTextDetailsContainer}>
                      {/*name item*/}
                      <View style={styles.recruiterNameContainer}>
                        <Text style={styles.recruiterNameItem}>
                          {recruiter.recruiterName} ·
                        </Text>
                        <Text style={styles.recruiterDarkItem}>
                          {" "}
                          {recruiter.subscribed}
                        </Text>
                      </View>

                      {/*position item*/}
                      <View style={styles.recruiterNameContainer}>
                        <Text style={styles.recruiterNameItem}>
                          {recruiter.position}
                        </Text>
                      </View>

                      {/*member item*/}
                      <View style={styles.recruiterNameContainer}>
                        <Text style={styles.recruiterDarkItem}>
                          Job poster · Chat Media Hub member since{" "}
                          {recruiter.memberSince}
                        </Text>
                      </View>

                      {/*mutual item*/}
                      <View style={styles.recruiterNameContainer}>
                        <Text style={styles.recruiterDarkItem}>
                          {recruiter.mutualConnectionTotal} mutual connection
                        </Text>
                      </View>
                    </View>

                    {/*recruiter button section*/}
                    <View style={styles.recruiterButtonContainer}>
                      <TouchableOpacity
                        onPress={() => console.log("message recruiter")}
                        style={styles.recruiterButtonContent}
                      >
                        <FontAwesome
                          name="send-o"
                          size={12}
                          color={COLORS.white}
                        />
                        <Text style={styles.recruiterButtonTextItem}>
                          {"  "}
                          Message
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              ))}
            </>
          ) : null}

          {/*about job section*/}
          <View style={styles.aboutJobContainer}>
            {/*heading section*/}
            <View style={styles.aboutJobHeadingContainer}>
              <Text style={styles.aboutJobHeadingTextItem}>About the job</Text>
            </View>

            {/*top section*/}
            <View style={styles.aboutJobTopContent}>
              {/*title item*/}
              <View style={styles.jobTopContentContainer}>
                <Text style={styles.jobTopContentHeadingTextItem}>Title: </Text>
                <Text style={styles.jobTopContentTextItem}>{job.jobTitle}</Text>
              </View>

              {/*salary item*/}
              <View style={styles.jobTopContentContainer}>
                <Text style={styles.jobTopContentHeadingTextItem}>
                  Salary:{" "}
                </Text>
                <Text style={styles.jobTopContentTextItem}>
                  {job.jobDetails[0].salaryRange}
                </Text>
              </View>

              {/*start item*/}
              <View style={styles.jobTopContentContainer}>
                <Text style={styles.jobTopContentHeadingTextItem}>
                  Start date:{" "}
                </Text>
                <Text style={styles.jobTopContentTextItem}>
                  {job.jobDetails[0].startDate}
                </Text>
              </View>

              {/*close item*/}
              <View style={styles.jobTopContentContainer}>
                <Text style={styles.jobTopContentHeadingTextItem}>
                  Application close:{" "}
                </Text>
                <Text style={styles.jobTopContentTextItem}>
                  {job.jobDetails[0].closingDate}
                </Text>
              </View>

              {/*place of work item*/}
              <View style={styles.jobTopContentContainer}>
                <Text style={styles.jobTopContentHeadingTextItem}>
                  Place of work:{" "}
                </Text>
                <Text style={styles.jobTopContentTextItem}>
                  {job.jobDetails[0].placeOfWork}
                </Text>
              </View>
            </View>

            {/*company details section*/}
            <View style={styles.aboutCompanyDescriptionContainer}>
              <Text style={styles.aboutCompanyDescriptionTextItem}>
                {job.jobDetails[0].companyDetails}
              </Text>
            </View>

            {/*responsibility section*/}
            <View style={styles.jobResponsibilitiesContainer}>
              {/*responsibilities header*/}
              <View style={styles.jobResponsibilitiesHeaderContent}>
                <Text style={styles.jobResponsibilitiesHeaderTextItem}>
                  Responsibilities
                </Text>
              </View>

              {/*responsibilities list*/}
              {job.jobDetails.map((responsible, i) => (
                <View key={i} style={styles.jobResponsibilityItemContainer}>
                  {responsible.responsibilities.map((res, i) => (
                    <Text key={i} style={styles.jobResponsibilityItem}>
                      {res.responsibility}.
                    </Text>
                  ))}
                </View>
              ))}
            </View>

            {/*qualification section*/}
            <View style={styles.jobResponsibilitiesContainer}>
              {/*responsibilities header*/}
              <View style={styles.jobResponsibilitiesHeaderContent}>
                <Text style={styles.jobResponsibilitiesHeaderTextItem}>
                  Qualifications
                </Text>
              </View>

              {/*responsibilities list*/}
              {job.jobDetails.map((qualify, i) => (
                <View key={i} style={styles.jobResponsibilityItemContainer}>
                  {qualify.qualification.map((qual, i) => (
                    <Text key={i} style={styles.jobResponsibilityItem}>
                      {qual.qualify}.
                    </Text>
                  ))}
                </View>
              ))}
            </View>

            {/*posted date*/}
            <View style={styles.postedDateContainer}>
              <Text style={styles.postedDateTextItem}>
                Post on {job.jobDetails[0].postedOn}
              </Text>
            </View>
          </View>

          {/*how you match section*/}
          <View style={styles.meetHiringTeamContainer}>
            {/*matching section*/}
            <View style={styles.aboutJobHeadingContainer}>
              <Text style={styles.aboutJobHeadingTextItem}>How you match</Text>
            </View>

            <View style={styles.howYouMatchContainer}>
              {/*image section*/}
              <View style={styles.howYouMatchImageContainer}>
                <Image
                  source={{
                    uri: "https://www.umb.edu/media/umassboston/content-assets/learningdesign/2020AwardTrophy.png",
                  }}
                  style={styles.howYouMatchImageItem}
                />
              </View>

              {/*text section*/}
              <View style={styles.howYouMatchTextContainer}>
                <Text style={styles.howYouMatchTextItem}>
                  3 of 3 skills match your profile - you may be a good fit
                </Text>
              </View>
            </View>

            <View style={styles.separatorSkills} />

            {/*skills section*/}
            <View style={styles.aboutJobHeadingContainer}>
              <Text style={styles.howYouMatchSubHeadingTextItem}>
                Skills associated with the job posted
              </Text>
              <Text style={styles.postedDateTextItem}>
                Identified by Chat Media Hub
              </Text>
            </View>

            <View style={styles.howYouMatchSkillContainer}>
              {/*skills section*/}
              <View style={styles.skillContainer}>
                <View style={styles.skillIconContainer}>
                  <AntDesign
                    name="checkcircle"
                    size={14}
                    color={COLORS.greenActive}
                  />
                </View>

                <View style={styles.skillTextContainer}>
                  <Text style={styles.skillTextItem}>
                    3 skills on your profile
                  </Text>

                  <Text style={styles.skillTextItems}>Java, MySQL, Jira</Text>
                </View>
              </View>

              {/*add skill section*/}
              <View style={styles.skillAddContainer}>
                <View style={styles.skillAddIconContainer}>
                  <MaterialCommunityIcons
                    name="lightbulb-on-outline"
                    size={12}
                    color={COLORS.lightBlue}
                  />
                </View>

                <View style={styles.skillAddTextContainer}>
                  <Text style={styles.skillAddTextItem}>
                    Add skills you have to your profile to stand out to the
                    employer.{" "}
                    <Text
                      onPress={() => console.log("add skill pressed")}
                      style={styles.skillAddTextActionItem}
                    >
                      Add skills
                    </Text>
                  </Text>
                </View>
              </View>

              {/*skill button section*/}
              <TouchableOpacity
                onPress={() => console.log("show skills pressed")}
                style={styles.showSkillArrayContainer}
              >
                <Text style={styles.showSkillArrayTextItem}>
                  Show all skills{" "}
                  <AntDesign name="arrowright" size={14} color={COLORS.white} />
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.separatorSkills} />

            {/*premium section*/}
            <View style={styles.aboutJobHeadingContainer}>
              <Text style={styles.howYouMatchSubHeadingTextItem}>
                Achieve your goals faster with Premium
              </Text>
              <Text style={styles.postedDateTextItem}>
                Get exclusive access to applicant insights, see jobs where you'd
                be a top applicant and more
              </Text>
            </View>

            {/*premium advert for account section*/}
            <View style={styles.premiumAccountContainer}>
              {premiumData.map((premium) => (
                <PremiumAccountItem key={premium.id} premium={premium} />
              ))}
            </View>
          </View>

          {/*about company section*/}
          <View style={styles.companyAboutSectionContainer}>
            {/*heading section*/}
            <View style={styles.aboutJobHeadingContainer}>
              <Text style={styles.aboutJobHeadingTextItem}>
                About the company
              </Text>
            </View>

            {/*company image section*/}
            <View style={styles.companyImageAboutContainer}>
              {/*company image item*/}
              <View style={styles.companyImageContent}>
                <Image
                  source={{ uri: job.companyImage }}
                  style={styles.companyImageItem}
                />
              </View>

              {/*company text item*/}
              <View style={styles.companyTextContent}>
                <Text style={styles.companyTextHeadingContent}>
                  {job.companyName}
                </Text>
                <Text style={styles.companyFollowerTextItem}>
                  {job.followers >= 1000000
                    ? `${(job.followers / 1000000).toFixed(0)}M`
                    : job.followers >= 1100000
                    ? `${(job.followers / 1000000).toFixed(1)}M`
                    : job.followers >= 1000
                    ? `${(job.followers / 1000).toFixed(1)}K`
                    : job.followers}{" "}
                  followers
                </Text>
              </View>

              {/*company follow item*/}
              <View style={styles.companyFollowButtonContainer}>
                <TouchableOpacity
                  onPress={() => setFollowing(!following)}
                  style={styles.companyFollowButtonContent}
                >
                  <AntDesign name="plus" size={14} color={COLORS.lightBlue} />
                  <Text style={styles.companyFollowButtonTextItem}>
                    {" "}
                    {following ? "Following" : "Follow"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*company text section*/}
            <View style={styles.companyTextItemContainer}>
              <Text style={styles.companyTextItem}>
                {job.companyType} · {job.employeeTotal} employees ·{" "}
                {job.onSocialMediaHub} on Social Media Hub
              </Text>
            </View>

            {/*company description section*/}
            <View style={styles.companyTextItemContainer}>
              <Text
                numberOfLines={seeMore ? 100 : 3}
                style={styles.companyTextDetailsItem}
              >
                {job.jobDetails[0].companyDetails}
              </Text>
            </View>

            <View style={styles.seeMoreContainer}>
              <Text
                onPress={() => setSeeMore(!seeMore)}
                style={styles.companyTextDetailsItem}
              >
                {seeMore ? "...see less" : "...see more"}
              </Text>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  jobDetailsContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
    marginBottom: Platform.OS === "ios" ? 25 : 0,
  },
  jobSectionContainer: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: Platform.OS === "ios" ? 5 : 0,
    flexDirection: "column",
  },

  //job header section
  jobHeaderSectionContainer: {
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "column",
  },
  jobTitleContentContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobTitleContent: {
    width: "80%",
    flexDirection: "column",
  },
  jobTitleHeadingTextItem: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  jobIconContainer: {
    width: "15%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  //modal section
  modalInnerContainer: {
    flexDirection: "column",
  },
  modalInnerContent: {
    width: "45%",
    height: Platform.OS === "ios" ? "10%" : "13%",
    paddingVertical: 8,
    paddingHorizontal: 5,
    marginTop: Platform.OS === "ios" ? "25%" : "18%",
    alignSelf: "flex-end",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.darkGray,
    backgroundColor: COLORS.black,
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
  topModalHeadingContainer: {
    marginTop: 5,
    marginBottom: 8,
  },
  topModalHeadingTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
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

  //job details section
  jobDetailsContentContainer: {
    width: "90%",
    marginTop: 8,
    flexDirection: "row",
  },
  jobDetailItemContent: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  jobDetailTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },
  jobDetailOtherTextItem: {
    color: COLORS.lightBlue,
    fontSize: 12,
    fontWeight: "600",
    opacity: 0.7,
  },

  //moe details about job section
  moreDetailsAboutJobContainer: {
    width: "100%",
    marginTop: 15,
    flexDirection: "column",
  },
  moreDetailsContentWrapper: {
    width: "100%",
    marginBottom: 15,
    flexDirection: "row",
  },
  detailsIconContainer: {
    width: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsIconDescriptionContainer: {
    width: "95%",
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  detailsIconDescriptionItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },
  detailsIconDescriptionsContainer: {
    width: "75%",
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  detailsIconDescriptionUnderlineItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
    textTransform: "capitalize",
    textDecorationLine: "underline",
  },

  //job button section
  jobButtonSectionContainer: {
    width: "100%",
    marginTop: 5,
    flexDirection: "row",
  },
  jobButtonApplyContainer: {
    width: "35%",
    padding: 10,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: COLORS.lightBlue,
  },
  jobButtonTextItem: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: "600",
  },
  jobButtonSaveContainer: {
    width: "25%",
    padding: 10,
    marginLeft: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
  },
  jobButtonSaveTextItem: {
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },

  //meet hiring team section
  meetHiringTeamContainer: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 18,
    flexDirection: "column",
    borderWidth: 1.5,
    borderColor: COLORS.reechGray,
    backgroundColor: COLORS.reechGray,
  },
  meetHiringTextContainer: {
    width: "100%",
    marginBottom: 5,
  },
  meetHiringTextItem: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  //recruiter details section
  recruiterDetailsContainer: {
    width: "100%",
    marginTop: 5,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  recruiterImageContainer: {
    width: "20%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  recruiterImageItem: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  recruiterTextDetailsContainer: {
    width: "55%",
    flexDirection: "column",
  },
  recruiterNameContainer: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 5,
  },
  recruiterNameItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },
  recruiterDarkItem: {
    color: COLORS.darkGray,
    fontSize: 12,
    fontWeight: "600",
  },
  recruiterButtonContainer: {
    width: "25%",
  },
  recruiterButtonContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  recruiterButtonTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },

  //about job section
  aboutJobContainer: {
    width: "100%",
    marginTop: 20,
    padding: 15,
    flexDirection: "column",
    backgroundColor: COLORS.reechGray,
  },
  aboutJobHeadingContainer: {
    marginBottom: 15,
  },
  aboutJobHeadingTextItem: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  aboutJobTopContent: {
    width: "100%",
    flexDirection: "column",
    marginBottom: 10,
  },
  jobTopContentContainer: {
    width: "80%",
    flexDirection: "row",
  },
  jobTopContentHeadingTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },
  jobTopContentTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  aboutCompanyDescriptionContainer: {
    marginTop: 10,
  },
  aboutCompanyDescriptionTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  jobResponsibilitiesContainer: {
    marginTop: 10,
  },
  jobResponsibilitiesHeaderContent: {
    marginBottom: 10,
  },
  jobResponsibilitiesHeaderTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
  jobResponsibilityItemContainer: {
    marginTop: 2,
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  jobResponsibilityItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 4,
  },
  postedDateContainer: {
    marginTop: 15,
  },
  postedDateTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },

  //how you match section
  howYouMatchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  howYouMatchImageContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  howYouMatchImageItem: {
    width: 50,
    height: 50,
  },
  howYouMatchTextContainer: {
    width: "78%",
    justifyContent: "center",
    alignItems: "center",
  },
  howYouMatchTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
  separatorSkills: {
    marginVertical: 10,
    borderBottomColor: COLORS.darkGray,
    borderBottomWidth: StyleSheet.hairlineWidth * 2,
  },
  howYouMatchSubHeadingTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
  howYouMatchSkillContainer: {
    flexDirection: "column",
  },
  skillContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  skillIconContainer: {
    width: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  skillTextContainer: {
    width: "90%",
    flexDirection: "column",
  },
  skillTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },
  skillTextItems: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  skillAddContainer: {
    width: "100%",
    marginTop: 10,
    padding: 20,
    flexDirection: "row",
    backgroundColor: COLORS.darkBlue,
  },
  skillAddIconContainer: {
    width: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  skillAddTextContainer: {
    width: "90%",
    marginLeft: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  skillAddTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  skillAddTextActionItem: {
    color: COLORS.lightBlue,
    fontSize: 12,
    fontWeight: "400",
  },
  showSkillArrayContainer: {
    width: "40%",
    marginTop: 10,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  showSkillArrayTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "600",
  },

  //premium component container
  premiumAccountContainer: {
    flexDirection: "column",
  },

  //company about section
  companyAboutSectionContainer: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 18,
    flexDirection: "column",
    borderWidth: 1.5,
    borderColor: COLORS.reechGray,
    backgroundColor: COLORS.reechGray,
  },
  companyImageAboutContainer: {
    width: "100%",
    flexDirection: "row",
  },
  companyImageContent: {
    width: Platform.OS === "ios" ? "22%" : "25%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  companyImageItem: {
    width: 70,
    height: 70,
    resizeMode: "cover",
  },
  companyTextContent: {
    width: "45%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  companyTextHeadingContent: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 2,
  },
  companyFollowerTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
  },
  companyFollowButtonContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  companyFollowButtonContent: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: COLORS.lightBlue,
    borderWidth: 1,
  },
  companyFollowButtonTextItem: {
    color: COLORS.lightBlue,
    fontSize: 14,
    fontWeight: "600",
  },
  companyTextItemContainer: {
    marginVertical: 10,
    flexDirection: "row",
  },
  companyTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
  companyTextDetailsItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  seeMoreContainer: {
    alignItems: "flex-end",
  },
});
