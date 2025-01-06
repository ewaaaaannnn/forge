import { Comment } from "@/models/Comment.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class CommentService {
  async getCommentsbyListingId(listingId) {
    const response = await api.get(`api/listings/${listingId}/comments`)
    const comments = response.data.map(commentPOJO => new Comment(commentPOJO))
    AppState.comments = comments
  }

}

export const commentService = new CommentService()