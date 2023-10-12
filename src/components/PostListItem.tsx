import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Link } from "expo-router";
import { Video, ResizeMode } from "expo-av";

//customs
import { Post } from "../types";
import { COLORS, images } from "../constants";

//specify the prop type
type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  const video = useRef(null);

  //state handlers
  const [showMore, setShowMore] = useState(false);
  const [status, setStatus] = useState({});

  const formattedFollowers = parseInt(post.follower).toLocaleString();

  return (
    <View style={styles.postListContainer}>
      {/*user image top section*/}
      <View style={styles.topImageSection}>
        {/*user image item*/}
        <View style={styles.topUserImageContainer}>
          <Image
            source={{ uri: post.author.image }}
            style={
              !post.isAd ? styles.topUserImageItem : styles.topUserAdImageItem
            }
          />
        </View>

        {/*user bio item*/}
        <View style={styles.userNameContainer}>
          {/*user name item*/}
          <Text style={styles.userNameTextItem}>
            <Link href={`/users/${post.author.id}`}>{post.author.name}</Link>
            <Text style={styles.userSubscribeTextItem}>
              {!post.isAd ? " · " + post.author.subscribed : null}
            </Text>
          </Text>

          {/*followers and position item*/}
          <Text style={styles.userPositionTextItem}>
            {post.isAd
              ? formattedFollowers + " followers"
              : post.author.position}
          </Text>

          {/*prompted and createdAt item*/}
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
        <View style={styles.moreOptionContainer}>
          <Entypo name="dots-three-vertical" size={14} color={COLORS.white} />
        </View>
      </View>

      {/*user post content section*/}
      <View style={styles.postTextContentContainer}>
        <Text
          numberOfLines={showMore ? undefined : 3}
          style={styles.postTextContentTextItem}
        >
          <Link href={`/posts/${post.id}`}>{post.content}</Link>
        </Text>
      </View>

      {/*see more*/}
      <TouchableOpacity
        onPress={() => setShowMore(!showMore)}
        style={styles.seeMoreTextContainer}
      >
        <Text style={styles.seeMoreTextItem}>
          {showMore ? "...less" : "...see more"}
        </Text>
      </TouchableOpacity>

      {/*user post image section*/}
      <View style={styles.postImageContainer}>
        {post.isVideo === true && post.image === "" ? (
          <TouchableWithoutFeedback
            onPress={() =>
              status.isPlaying
                ? video.current.pauseAsync()
                : video.current.playAsync()
            }
          >
            <Video
              ref={video}
              source={{ uri: post.videoUri }}
              posterSource={{ uri: post.videoThumbnail }}
              isLooping={false}
              isMuted={false}
              useNativeControls={false}
              style={styles.videoPlayersItem}
              resizeMode={ResizeMode.STRETCH}
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              onError={(error) => console.log("Video Error", error)}
            />
          </TouchableWithoutFeedback>
        ) : (
          post.image && (
            <Image
              source={{ uri: post.image }}
              style={[
                styles.postImageItem,
                { aspectRatio: post.isAd ? 1 : 1.5 },
              ]}
            />
          )
        )}
      </View>

      {/*ad web link section*/}
      {post.isAd && (
        <View style={styles.adWebLinkContainer}>
          {/*ad title & web link section*/}
          <View style={styles.adTitleLinkContainer}>
            <View style={styles.adTitleContainer}>
              <Text style={styles.adTitleTextItem}>{post.webTitle}</Text>
            </View>

            <View style={styles.adWebLinkUriContainer}>
              <Text style={styles.adWebLinkUriTextItem}>{post.webLink}</Text>
            </View>
          </View>

          {/*call to action section*/}
          <View style={styles.adCTAContainer}>
            <Link href={`https://${post.webCTAUri}`}>
              <Text style={styles.adCTATextItem}>{post.webCTA}</Text>
            </Link>
          </View>
        </View>
      )}

      {/*show post action count*/}
      {post.likes.length !== 0 && (
        <View style={styles.postsReactionCountContainer}>
          {/*like section*/}
          <View style={styles.postsReactionLikeCountContainer}>
            <View style={styles.postsReactionLikeCountTextContent}>
              {/*like icons*/}
              <View style={styles.commentsReactionTypeContent}>
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
                      style={styles.commentsReactionImageItemContainer}
                    >
                      {uniqueLike.likeType === "love" ? (
                        <Image
                          key={i}
                          source={{ uri: images.love }}
                          style={styles.commentsReactionImageItem}
                        />
                      ) : uniqueLike.likeType === "celebrate" ? (
                        <Image
                          key={i}
                          source={{ uri: images.celebrate }}
                          style={styles.commentsReactionImageItem}
                        />
                      ) : uniqueLike.likeType === "insightful" ? (
                        <Image
                          key={i}
                          source={{ uri: images.insightful }}
                          style={styles.commentsReactionImageItem}
                        />
                      ) : (
                        <Image
                          key={i}
                          source={{ uri: images.like }}
                          style={styles.commentsReactionImageItem}
                        />
                      )}
                    </View>
                  ))}
              </View>

              {/*like count*/}
              <Text style={styles.postsReactionLikeCountTextItem}>
                {post.likes.length}
              </Text>
            </View>
          </View>

          {/*comment and repost section*/}
          <View style={styles.postsReactionCommentContainer}>
            {post.comments.length !== 0 && (
              <Text style={styles.postsReactionCommentTextItem}>
                {post.comments.length} comments{"  "}·{"  "}
              </Text>
            )}

            {/*repost count*/}
            {post.repost && (
              <Text style={styles.postsReactionCommentTextItem}>
                {post.repost} reposts
              </Text>
            )}
          </View>
        </View>
      )}

      {/*user commenting action section*/}
      <View style={styles.userActionContainer}>
        {/*like action*/}
        <TouchableOpacity
          onPress={() => console.log("like pressed")}
          style={styles.actionContentContainer}
        >
          <SimpleLineIcons name="like" size={16} color={COLORS.lightBlue} />
          <Text style={styles.actionTextItem}>Like</Text>
        </TouchableOpacity>

        {/*comment action*/}
        <TouchableOpacity
          onPress={() => console.log("comment pressed")}
          style={styles.actionContentContainer}
        >
          <FontAwesome5 name="comment" size={16} color={COLORS.lightBlue} />
          <Text style={styles.actionTextItem}>Comment</Text>
        </TouchableOpacity>

        {/*share action*/}
        <TouchableOpacity
          onPress={() => console.log("share pressed")}
          style={styles.actionContentContainer}
        >
          <FontAwesome
            name="share-square-o"
            size={16}
            color={COLORS.lightBlue}
          />
          <Text style={styles.actionTextItem}>Repost</Text>
        </TouchableOpacity>

        {/*send action*/}
        <TouchableOpacity
          onPress={() => console.log("send presseds")}
          style={styles.actionContentContainer}
        >
          <FontAwesome name="send-o" size={16} color={COLORS.lightBlue} />
          <Text style={styles.actionTextItem}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postListContainer: {
    width: "100%",
    maxWidth: 500,
    paddingTop: 10,
    flexDirection: "column",
    alignSelf: "center",
    backgroundColor: COLORS.reechGray,
  },

  //top image section
  topImageSection: {
    width: "100%",
    flexDirection: "row",
  },
  topUserImageContainer: {
    width: "23%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  topUserImageItem: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    borderRadius: 60,
    borderColor: COLORS.lightBlue,
    borderWidth: 1.5,
  },
  topUserAdImageItem: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  userNameContainer: {
    width: "65%",
    flexDirection: "column",
    justifyContent: "center",
  },
  userNameTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  userPositionTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  userSubscribeTextItem: {
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
  moreOptionContainer: {
    width: "10%",
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  postTextContentContainer: {
    marginVertical: 10,
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  postTextContentTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
  },
  seeMoreTextContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  seeMoreTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  postImageContainer: {
    width: "100%",
  },
  videoPlayersItem: {
    width: "100%",
    aspectRatio: 1,
  },
  postImageItem: {
    width: "100%",
    resizeMode: "cover",
  },

  //web link section
  adWebLinkContainer: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: COLORS.reechGray,
  },
  adTitleLinkContainer: {
    width: "75%",
    flexDirection: "column",
  },
  adTitleContainer: {
    marginBottom: 8,
  },
  adTitleTextItem: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  adWebLinkUriContainer: {
    flexDirection: "column",
  },
  adWebLinkUriTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.5,
  },
  adCTAContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  adCTATextItem: {
    color: COLORS.lightBlue,
    fontSize: 16,
    fontWeight: "400",
    textTransform: "capitalize",
  },

  //post reactions count
  postsReactionCountContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postsReactionLikeCountContainer: {
    width: "40%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  postsReactionLikeCountTextContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  commentsReactionTypeContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentsReactionImageItemContainer: {
    maxWidth: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  commentsReactionImageItem: {
    width: 6,
    height: 6,
    padding: 7,
    borderRadius: 10,
    resizeMode: "contain",
    backgroundColor: COLORS.lightGray,
  },
  postsReactionLikeCountTextItem: {
    marginLeft: 10,
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.7,
  },
  postsReactionCommentContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  postsReactionCommentTextItem: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "400",
    opacity: 0.7,
  },

  //bottom image section
  userActionContainer: {
    width: "100%",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: COLORS.gray,
    borderTopWidth: 0.5,
  },
  actionContentContainer: {
    width: "22%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  actionTextItem: {
    marginTop: 2,
    color: COLORS.lightBlue,
    fontSize: 12,
    fontWeight: "600",
  },
});
