import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  Modal,
} from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

//custom
import posts from "../../../assets/data/posts.json";
import EmptyCommentComponent from "../../components/custom/EmptyCommentComponent";
import LoadingComponent from "../../components/custom/LoadingComponent";
import { COLORS, images } from "../../constants";

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();

  const post = posts.find((post) => post.id === id);

  //if post not found
  if (!post) {
    return <LoadingComponent />;
  }

  //state handler
  const [sortCommentsModal, setSortCommentsModal] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showNestedComment, setShowNestedComment] = useState(false);
  const [showReactionScroll, setShowReactionScroll] = useState(false);

  const toggleSortCommentModal = () => {
    setSortCommentsModal(!sortCommentsModal);
  };

  const formattedFollowers = parseInt(post.follower).toLocaleString();

  return (
    <View style={styles.postDetailsContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.postListContainer}
      >
        {/*user image top section*/}
        <View style={styles.topsImageSection}>
          {/*user image item*/}
          <View style={styles.topsUserImageContainer}>
            <Image
              source={{ uri: post.author.image }}
              style={
                !post.isAd
                  ? styles.topsUserImageItem
                  : styles.topsUserAdsImageItem
              }
            />
          </View>

          {/*user bio item*/}
          <View style={styles.usersNameContainer}>
            <Text style={styles.usersNameTextItem}>
              <Link href={`/users/${post.author.id}`}>{post.author.name}</Link>
              <Text style={styles.usersSubscribeTextItem}>
                {!post.isAd ? " · " + post.author.subscribed : null}
              </Text>
            </Text>
            <Text style={styles.usersPositionTextItem}>
              {post.isAd
                ? formattedFollowers + " followers"
                : post.author.position}
            </Text>
            <Text style={styles.userPostDateTextItem}>
              {post.isAd ? "Promoted by" : null}{" "}
              {post.isAd && (
                <Text style={{ fontWeight: "600" }}>{post.companyName}</Text>
              )}
              {!post.isAd ? post.createdAt : null}{" "}
              {!post.public && !post.isAd && (
                <>
                  · <Entypo name="globe" size={10} color={COLORS.white} />
                </>
              )}
            </Text>
          </View>

          {/*more info section*/}
          <View style={styles.moresOptionContainer}>
            <Entypo name="dots-three-vertical" size={14} color={COLORS.white} />
          </View>
        </View>

        {/*user post content section*/}

        <View style={styles.postsTextContentContainer}>
          <Text
            numberOfLines={showMore ? 100 : 3}
            style={styles.postsTextContentTextItem}
          >
            <Link href={`/posts/${post.id}`}>{post.content}</Link>
          </Text>
        </View>

        {/*see more*/}
        {!post.isAd && (
          <TouchableOpacity
            onPress={() => setShowMore(!showMore)}
            style={styles.seesMoreTextContainer}
          >
            <Text style={styles.seesMoreTextItem}>
              {showMore ? "...less" : "...see more"}
            </Text>
          </TouchableOpacity>
        )}

        {/*user post image section*/}
        <View style={styles.postsImageContainer}>
          {post.image && (
            <Image
              source={{ uri: post.image }}
              style={[
                styles.postsImageItem,
                { aspectRatio: post.isAd ? 1 : 1.5 },
              ]}
            />
          )}
        </View>

        {/*ad web link section*/}
        {post.isAd && (
          <View style={styles.adsWebLinkContainer}>
            {/*ad title & web link section*/}
            <View style={styles.adsTitleLinkContainer}>
              <View style={styles.adsTitleContainer}>
                <Text style={styles.adsTitleTextItem}>{post.webTitle}</Text>
              </View>

              <View style={styles.adsWebLinkUriContainer}>
                <Text style={styles.adsWebLinkUriTextItem}>{post.webLink}</Text>
              </View>
            </View>

            {/*call to action section*/}
            <View style={styles.adsCTAContainer}>
              <Link href={`https://${post.webCTAUri}`}>
                <Text style={styles.adsCTATextItem}>{post.webCTA}</Text>
              </Link>
            </View>
          </View>
        )}

        {/*show post action count*/}
        {post.likes.length !== 0 && (
          <View style={styles.postReactionCountContainer}>
            {/*like section*/}
            <View style={styles.postReactionLikeCountContainer}>
              <View style={styles.postReactionLikeCountTextContent}>
                {/*like icons*/}
                <View style={styles.commentReactionTypeContent}>
                  {post.likes
                    .reduce((uniqueLikes: { likeType: string }[], like) => {
                      if (
                        !uniqueLikes.some(
                          (uniqueLike) => uniqueLike.likeType === like.likeType
                        )
                      ) {
                        uniqueLikes.push(like);
                      }
                      return uniqueLikes;
                    }, [])
                    .map((uniqueLike, i) => (
                      <View
                        key={i}
                        style={styles.commentReactionImageItemContainer}
                      >
                        {uniqueLike.likeType === "love" ? (
                          <Image
                            key={i}
                            source={{ uri: images.love }}
                            style={styles.commentReactionImageItem}
                          />
                        ) : uniqueLike.likeType === "celebrate" ? (
                          <Image
                            key={i}
                            source={{ uri: images.celebrate }}
                            style={styles.commentReactionImageItem}
                          />
                        ) : uniqueLike.likeType === "insightful" ? (
                          <Image
                            key={i}
                            source={{ uri: images.insightful }}
                            style={styles.commentReactionImageItem}
                          />
                        ) : (
                          <Image
                            key={i}
                            source={{ uri: images.like }}
                            style={styles.commentReactionImageItem}
                          />
                        )}
                      </View>
                    ))}
                </View>

                {/*like count*/}
                <Text style={styles.postReactionLikeCountTextItem}>
                  {post.likes.length}
                </Text>
              </View>
            </View>

            {/*comment and repost section*/}
            <View style={styles.postReactionCommentContainer}>
              {post.comments.length !== 0 && (
                <Text style={styles.postReactionCommentTextItem}>
                  {post.comments.length} comments{"  "}·{"  "}
                </Text>
              )}

              {/*repost count*/}
              {post.repost && (
                <Text style={styles.postReactionCommentTextItem}>
                  {post.repost} reposts
                </Text>
              )}
            </View>
          </View>
        )}

        {/*user commenting action section*/}
        <View style={styles.usersActionContainer}>
          {/*like action*/}
          <TouchableOpacity
            onPress={() => console.log("like pressed")}
            style={styles.actionsContentContainer}
          >
            <SimpleLineIcons name="like" size={16} color={COLORS.lightBlue} />
            <Text style={styles.actionsTextItem}>Like</Text>
          </TouchableOpacity>

          {/*comment action*/}
          <TouchableOpacity
            onPress={() => console.log("comment pressed")}
            style={styles.actionsContentContainer}
          >
            <FontAwesome5 name="comment" size={16} color={COLORS.lightBlue} />
            <Text style={styles.actionsTextItem}>Comment</Text>
          </TouchableOpacity>

          {/*share action*/}
          <TouchableOpacity
            onPress={() => console.log("share pressed")}
            style={styles.actionsContentContainer}
          >
            <FontAwesome
              name="share-square-o"
              size={16}
              color={COLORS.lightBlue}
            />
            <Text style={styles.actionsTextItem}>Repost</Text>
          </TouchableOpacity>

          {/*send action*/}
          <TouchableOpacity
            onPress={() => console.log("send presseds")}
            style={styles.actionsContentContainer}
          >
            <FontAwesome name="send-o" size={16} color={COLORS.lightBlue} />
            <Text style={styles.actionsTextItem}>Send</Text>
          </TouchableOpacity>
        </View>

        {/*post reactions*/}
        {post.likes.length !== 0 && (
          <View style={styles.postReactionsContainer}>
            {/*reactions heading*/}
            <View style={styles.postReactionsHeadingContainer}>
              <Text style={styles.postReactionsHeadingTextItem}>Reactions</Text>
            </View>

            {/*reactions people section*/}
            <View style={styles.postReactionsPeopleContainer}>
              {/*reacted people section*/}
              {showReactionScroll ? (
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.postReactionsScrollPeopleContent}
                >
                  {post.likes.map((like, i) => (
                    <View
                      key={i}
                      style={styles.postReactionsPeopleItemContainer}
                    >
                      <Image
                        source={{ uri: like.userImage }}
                        style={styles.postReactionsPeopleImageItem}
                      />
                      <Image
                        source={{
                          uri:
                            like.likeType === "like"
                              ? images.like
                              : like.likeType === "insightful"
                              ? images.insightful
                              : like.likeType === "love"
                              ? images.love
                              : like.likeType === "celebrate"
                              ? images.celebrate
                              : images.like,
                        }}
                        style={styles.postReactionsPeopleIconItem}
                      />
                    </View>
                  ))}
                </ScrollView>
              ) : (
                <View style={styles.postReactionsPeopleContent}>
                  {post.likes.map((like, i) => (
                    <View
                      key={i}
                      style={styles.postReactionsPeopleItemContainer}
                    >
                      {Platform.OS === "ios"
                        ? i < 5 && (
                            <>
                              <Image
                                source={{ uri: like.userImage }}
                                style={styles.postReactionsPeopleImageItem}
                              />
                              <Image
                                source={{
                                  uri:
                                    like.likeType === "like"
                                      ? images.like
                                      : like.likeType === "insightful"
                                      ? images.insightful
                                      : like.likeType === "love"
                                      ? images.love
                                      : like.likeType === "celebrate"
                                      ? images.celebrate
                                      : images.like,
                                }}
                                style={styles.postReactionsPeopleIconItem}
                              />
                            </>
                          )
                        : i < 4 && (
                            <>
                              <Image
                                source={{ uri: like.userImage }}
                                style={styles.postReactionsPeopleImageItem}
                              />
                              <Image
                                source={{
                                  uri:
                                    like.likeType === "like"
                                      ? images.like
                                      : like.likeType === "insightful"
                                      ? images.insightful
                                      : like.likeType === "love"
                                      ? images.love
                                      : like.likeType === "celebrate"
                                      ? images.celebrate
                                      : images.like,
                                }}
                                style={styles.postReactionsPeopleIconItem}
                              />
                            </>
                          )}
                    </View>
                  ))}
                </View>
              )}

              {/*reacted more section*/}
              {post.likes.length > 5 && !showReactionScroll && (
                <TouchableOpacity
                  onPress={() => setShowReactionScroll(true)}
                  style={styles.postReactionsPeopleSeeAllContent}
                >
                  <Ionicons
                    name="ellipsis-horizontal-sharp"
                    size={18}
                    color={COLORS.white}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}

        {/*comment section*/}
        <View style={styles.commentSectionContainer}>
          {post.comments.length === 0 ? (
            <View style={styles.emptyCommentContainer}>
              <EmptyCommentComponent message="Be the first to comment" />
            </View>
          ) : (
            <View style={styles.commentContentSectionContainer}>
              {/*comment heading*/}
              <View style={styles.commentHeadingContainer}>
                <View style={styles.commentHeadingContent}>
                  <Text style={styles.commentHeadingTextItem}>Comments</Text>
                </View>

                {/*sort comments*/}
                <TouchableOpacity
                  onPress={toggleSortCommentModal}
                  style={styles.commentFilterContent}
                >
                  <Text style={styles.commentFilterTextItem}>
                    Most relevant
                  </Text>
                  <FontAwesome
                    name="unsorted"
                    size={18}
                    color={COLORS.white}
                    style={{ opacity: 0.6 }}
                  />
                </TouchableOpacity>

                {/*sort comment option*/}
                <Modal
                  visible={sortCommentsModal}
                  transparent={true}
                  animationType="slide"
                  style={styles.modalsInnerContainer}
                >
                  <View style={styles.modalsInnerShareContent}>
                    <TouchableOpacity
                      onPress={toggleSortCommentModal}
                      style={styles.modalsActionContainer}
                    >
                      <AntDesign name="close" size={18} color={COLORS.white} />
                    </TouchableOpacity>

                    <View style={styles.modalsSeparator} />

                    {/*modal options*/}
                    <View style={styles.modalsOptionContainer}>
                      {/*modal items option*/}
                      <View style={styles.modalsOptionContent}>
                        <View style={styles.modalsOptionIconContent}>
                          <Octicons
                            name="rocket"
                            size={18}
                            color={COLORS.darkGray}
                          />
                        </View>

                        <View style={styles.modalsOptionTextContent}>
                          <Text style={styles.modalsOptionTextItem}>
                            Most relevant
                          </Text>
                          <Text style={styles.modalsOptionTextSmallItem}>
                            See the most relevant comments
                          </Text>
                        </View>
                      </View>

                      {/*modal items option*/}
                      <View style={styles.modalsOptionContent}>
                        <View style={styles.modalsOptionIconContent}>
                          <MaterialCommunityIcons
                            name="clock-time-four-outline"
                            size={18}
                            color={COLORS.darkGray}
                          />
                        </View>

                        <View style={styles.modalsOptionTextContent}>
                          <Text style={styles.modalsOptionTextItem}>
                            Most recent
                          </Text>
                          <Text style={styles.modalsOptionTextSmallItem}>
                            See all comments, the most recent comments are first
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>

              {/*comment items*/}
              <View style={styles.commentContentItemsContainer}>
                {post.comments.map((comment, i) => (
                  <View key={i}>
                    <View style={styles.userCommentSectionContainer}>
                      {/*user image section*/}
                      <View style={styles.userCommentImageContainer}>
                        <Image
                          source={{ uri: comment.userImage }}
                          style={styles.userCommentImageItem}
                        />
                      </View>

                      {/*user comment section*/}
                      <View style={styles.userCommentTextContainer}>
                        {/*top comment section*/}
                        <View style={styles.userTopCommentDescriptionContainer}>
                          {/*user name item*/}
                          <View style={styles.userTopCommentNameContainer}>
                            <View style={styles.userTopCommentNameContent}>
                              <Text style={styles.userTopNameTextItem}>
                                {comment.userName} ·{" "}
                              </Text>
                              <Text style={styles.userTopSubscribedTextItem}>
                                {comment.subscribed}
                              </Text>
                            </View>

                            <View style={styles.userTopCommentIconContent}>
                              <Ionicons
                                name="ellipsis-vertical"
                                size={14}
                                color={COLORS.white}
                              />
                            </View>
                          </View>

                          {/*user bio item*/}
                          <View style={styles.userTopBioContainer}>
                            <Text
                              numberOfLines={1}
                              style={styles.userTopBioTextItem}
                            >
                              {comment.position}
                            </Text>
                          </View>

                          {/*user comment date item*/}
                          <View style={styles.userTopBioContainer}>
                            <Text style={styles.userTopBioTextItem}>
                              {comment.commentDate}
                            </Text>
                          </View>
                        </View>

                        {/*bottom comment section*/}
                        <View style={styles.userActualCommentContainer}>
                          <Text style={styles.userActualCommentTextItem}>
                            {comment.userComment}
                          </Text>
                        </View>
                      </View>
                    </View>

                    {/* comment reaction section */}
                    {comment.commentLikes.length !== 0 && (
                      <View style={styles.commentActionContainer}>
                        {/* like section */}
                        <View style={styles.commentLikeActionContainer}>
                          <View style={styles.commentLikeActionContent}>
                            <Text
                              onPress={() =>
                                console.log("like comment pressed")
                              }
                              style={styles.commentLikeActionTextItem}
                            >
                              Like {"   "}·{"    "}
                            </Text>
                          </View>

                          <View style={styles.commentReactionTypeContainer}>
                            {/* like type */}
                            <View style={styles.commentReactionTypeContent}>
                              {comment.commentLikes
                                .reduce(
                                  (
                                    uniqueLikes: { likeType: string }[],
                                    commentType
                                  ) => {
                                    if (
                                      !uniqueLikes.some(
                                        (uniqueLike) =>
                                          uniqueLike.likeType ===
                                          commentType.likeType
                                      )
                                    ) {
                                      uniqueLikes.push(commentType);
                                    }
                                    return uniqueLikes;
                                  },
                                  []
                                )
                                .map((uniqueLike, i) => (
                                  <View
                                    key={i}
                                    style={
                                      styles.commentReactionImageItemContainer
                                    }
                                  >
                                    {uniqueLike.likeType === "love" ? (
                                      <Image
                                        key={i}
                                        source={{ uri: images.love }}
                                        style={styles.commentReactionImageItem}
                                      />
                                    ) : uniqueLike.likeType === "celebrate" ? (
                                      <Image
                                        key={i}
                                        source={{ uri: images.celebrate }}
                                        style={styles.commentReactionImageItem}
                                      />
                                    ) : uniqueLike.likeType === "insightful" ? (
                                      <Image
                                        key={i}
                                        source={{ uri: images.insightful }}
                                        style={styles.commentReactionImageItem}
                                      />
                                    ) : (
                                      <Image
                                        key={i}
                                        source={{ uri: images.like }}
                                        style={styles.commentReactionImageItem}
                                      />
                                    )}
                                  </View>
                                ))}
                            </View>

                            {/* like count */}
                            <Text style={styles.commentReactionTypeTextItem}>
                              {comment.commentLikes.length}
                            </Text>
                          </View>
                        </View>

                        {/*action separator*/}
                        {comment.nestedComment?.length !== 0 && (
                          <Text style={styles.commentActionSeparator}>
                            {Platform.OS === "ios" ? "  " : "   "}|{"   "}
                          </Text>
                        )}

                        {/* reply section */}
                        {comment.nestedComment?.length !== 0 && (
                          <View style={styles.commentReplyActionContainer}>
                            {/*reply action*/}
                            <View style={styles.replyActionContainer}>
                              <Text style={styles.replyActionTextItem}>
                                Reply
                              </Text>
                            </View>

                            {/*reply dot*/}
                            <View style={styles.replyActionContent}>
                              <Text style={styles.replyActionTextItem}>
                                {"  "}·{"  "}
                              </Text>
                            </View>

                            {/*reply count*/}
                            <TouchableOpacity
                              onPress={() =>
                                setShowNestedComment(!showNestedComment)
                              }
                              style={styles.replyActionContainer}
                            >
                              <Text style={styles.replyActionTextItem}>
                                {comment.nestedComment?.length} reply
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      </View>
                    )}

                    {/*nested comment*/}
                    {showNestedComment &&
                      comment.nestedComment?.map((comment, i) => (
                        <View
                          key={i}
                          style={styles.userNestedCommentSectionContainer}
                        >
                          {/*user image section*/}
                          <View style={styles.userNestedCommentImageContainer}>
                            <Image
                              source={{ uri: comment.userImage }}
                              style={styles.userNestedCommentImageItem}
                            />
                          </View>

                          {/*user comment section*/}
                          <View style={styles.userNestedCommentTextContainer}>
                            {/*top comment section*/}
                            <View
                              style={styles.userTopCommentDescriptionContainer}
                            >
                              {/*user name item*/}
                              <View style={styles.userTopCommentNameContainer}>
                                <View style={styles.userTopCommentNameContent}>
                                  <Text style={styles.userTopNameTextItem}>
                                    {comment.userName} ·{" "}
                                  </Text>
                                  <Text
                                    style={styles.userTopSubscribedTextItem}
                                  >
                                    {comment.subscribed}
                                  </Text>
                                </View>

                                <View style={styles.userTopCommentIconContent}>
                                  <Ionicons
                                    name="ellipsis-vertical"
                                    size={14}
                                    color={COLORS.white}
                                  />
                                </View>
                              </View>

                              {/*user bio item*/}
                              <View style={styles.userTopBioContainer}>
                                <Text
                                  numberOfLines={1}
                                  style={styles.userTopBioTextItem}
                                >
                                  {comment.position}
                                </Text>
                              </View>

                              {/*user comment date item*/}
                              <View style={styles.userTopBioContainer}>
                                <Text style={styles.userTopBioTextItem}>
                                  {comment.commentDate}
                                </Text>
                              </View>
                            </View>

                            {/*bottom comment section*/}
                            <View style={styles.userActualCommentContainer}>
                              <Text style={styles.userActualCommentTextItem}>
                                {comment.userComment}
                              </Text>
                            </View>
                          </View>
                        </View>
                      ))}
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  postDetailsContainer: {
    flex: 1,
  },
  postListContainer: {
    width: "100%",
    maxWidth: 500,
    paddingTop: 10,
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: COLORS.reechGray,
  },

  //top image section
  topsImageSection: {
    width: "100%",
    flexDirection: "row",
  },
  topsUserImageContainer: {
    width: "23%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  topsUserImageItem: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 60,
    borderColor: COLORS.lightBlue,
    borderWidth: 1.5,
  },
  topsUserAdsImageItem: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  usersNameContainer: {
    width: "65%",
    flexDirection: "column",
    justifyContent: "center",
  },
  usersNameTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  usersPositionTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  userPostDateTextItem: {
    marginTop: 4,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  usersSubscribeTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  moresOptionContainer: {
    width: "10%",
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  postsTextContentContainer: {
    marginVertical: 10,
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  postsTextContentTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  seesMoreTextContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  seesMoreTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  postsImageContainer: {
    width: "100%",
  },
  postsImageItem: {
    width: "100%",
    resizeMode: "cover",
  },

  //web link section
  adsWebLinkContainer: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: COLORS.reechGray,
  },
  adsTitleLinkContainer: {
    width: "75%",
    flexDirection: "column",
  },
  adsTitleContainer: {
    marginBottom: 8,
  },
  adsTitleTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  adsWebLinkUriContainer: {
    flexDirection: "column",
  },
  adsWebLinkUriTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  adsCTAContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  adsCTATextItem: {
    color: COLORS.lightBlue,
    fontSize: 16,
    fontWeight: "400",
    textTransform: "capitalize",
  },

  //post reaction count section
  postReactionCountContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postReactionLikeCountContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  postReactionLikeCountTextContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  postReactionLikeCountTextItem: {
    marginLeft: 10,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.7,
  },
  postReactionCommentContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  postReactionCommentTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.7,
  },

  //bottom image section
  usersActionContainer: {
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: COLORS.gray,
    borderTopWidth: 0.5,
  },
  actionsContentContainer: {
    width: "22%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  actionsTextItem: {
    marginTop: 2,
    color: COLORS.lightBlue,
    fontSize: 12,
    fontWeight: "600",
  },

  //post reaction section
  postReactionsContainer: {
    marginTop: 10,
    marginBottom: 0,
    paddingHorizontal: 20,
    flexDirection: "column",
  },
  postReactionsHeadingContainer: {
    flexDirection: "row",
  },
  postReactionsHeadingTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
  },
  postReactionsPeopleContainer: {
    width: "100%",
    marginHorizontal: -10,
    marginVertical: 10,
    flexDirection: "row",
  },
  postReactionsPeopleContent: {
    width: "80%",
    flexDirection: "row",
  },
  postReactionsScrollPeopleContent: {
    width: "80%",
    height: 48,
    flexDirection: "row",
  },
  postReactionsPeopleItemContainer: {
    marginHorizontal: 10,
  },
  postReactionsPeopleImageItem: {
    width: 45,
    height: 45,
    resizeMode: "cover",
    borderRadius: 45,
  },
  postReactionsPeopleIconItem: {
    top: -13,
    width: 18,
    height: 18,
    resizeMode: "contain",
    borderRadius: 18,
    alignSelf: "flex-end",
    marginBottom: -30,
  },
  postReactionsPeopleSeeAllContent: {
    top: Platform.OS === "ios" ? 0 : 2,
    width: 45,
    height: 45,
    marginHorizontal: Platform.OS === "ios" ? 25 : 20,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.white,
    backgroundColor: COLORS.reechGray,
  },

  //sort comment modal section
  modalsInnerContainer: {
    flexDirection: "column",
  },
  modalsInnerShareContent: {
    width: "100%",
    height: Platform.OS === "ios" ? "20%" : "22%",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: Platform.OS === "ios" ? "175%" : "160%",
    alignSelf: "flex-end",
    borderRadius: 10,
    backgroundColor: COLORS.black,
  },
  modalsActionContainer: {
    paddingHorizontal: 2,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  modalsOptionContainer: {
    marginTop: 15,
    flexDirection: "column",
  },
  modalsOptionContent: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 10,
  },
  modalsSeparator: {
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
  modalsOptionIconContent: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalsOptionTextContent: {
    width: "88%",
    marginLeft: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  modalsOptionTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
    opacity: 0.8,
  },
  modalsOptionTextSmallItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.8,
  },

  //comment section
  commentSectionContainer: {
    paddingHorizontal: 10,
    marginBottom: Platform.OS === "ios" ? 40 : 10,
  },
  emptyCommentContainer: {
    marginTop: Platform.OS === "ios" ? -20 : -60,
    justifyContent: "center",
  },
  commentContentSectionContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
    flexDirection: "column",
  },
  commentHeadingContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  commentHeadingContent: {
    width: "45%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  commentHeadingTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "400",
  },
  commentFilterContent: {
    width: "45%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  commentFilterTextItem: {
    marginRight: 10,
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "400",
    opacity: 0.6,
  },
  commentContentItemsContainer: {
    marginTop: 15,
    flexDirection: "column",
  },

  //user comment bubble
  userCommentSectionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  userCommentImageContainer: {
    width: "20%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  userCommentImageItem: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 50,
  },
  userCommentTextContainer: {
    width: "80%",
    height: "auto",
    padding: 10,
    flexDirection: "column",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: COLORS.reechGray,
  },
  userTopCommentDescriptionContainer: {
    flexDirection: "column",
  },
  userTopCommentNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userTopCommentNameContent: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  userTopNameTextItem: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  userTopSubscribedTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  userTopCommentIconContent: {
    width: "15%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  userTopBioContainer: {
    width: "85%",
    marginVertical: 0,
  },
  userTopBioTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  userActualCommentContainer: {
    width: "100%",
    marginTop: 10,
  },
  userActualCommentTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },

  //comment action section
  commentActionContainer: {
    width: "100%",
    marginTop: 5,
    left: Platform.OS === "ios" ? 80 : 64,
    flexDirection: "row",
    marginBottom: 20,
  },
  commentLikeActionContainer: {
    width: "28%",
    flexDirection: "row",
  },
  commentLikeActionContent: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  commentLikeActionTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  commentReactionTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentReactionTypeContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentReactionImageItemContainer: {
    maxWidth: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  commentReactionImageItem: {
    width: 6,
    height: 6,
    padding: 7,
    borderRadius: 10,
    resizeMode: "contain",
    backgroundColor: COLORS.lightGray,
  },
  commentReactionTypeTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
    marginLeft: 5,
  },
  commentActionSeparator: {
    color: COLORS.white,
    opacity: 0.5,
  },
  commentReplyActionContainer: {
    width: "50%",
    flexDirection: "row",
  },
  replyActionContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  replyActionTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  replyActionContent: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  //nested comment
  userNestedCommentSectionContainer: {
    width: "80%",
    left: Platform.OS === "ios" ? 68 : 57,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  userNestedCommentImageContainer: {
    width: "18%",
    left: Platform.OS === "ios" ? 10 : 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  userNestedCommentImageItem: {
    width: 35,
    height: 35,
    resizeMode: "cover",
    borderRadius: 35,
  },
  userNestedCommentTextContainer: {
    width: "85%",
    height: "auto",
    padding: 10,
    flexDirection: "column",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: COLORS.reechGray,
  },
});
