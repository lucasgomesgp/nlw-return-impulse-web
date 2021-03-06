import { prisma } from "../../prisma";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbackRepositories implements FeedbacksRepository {
  async create(data: FeedbackCreateData) {
    const { type, comment, screenshot } = data;
    const feedback = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
