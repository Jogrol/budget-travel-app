import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { Context } from './utils'

const resolvers = {
  Query: {
    expenses(parent, args, context: Context) {
      return context.prisma.expenses()
    },
    feed(parent, args, context: Context) {
      return context.prisma.posts({ where: { published: true } })
    },
    drafts(parent, args, context: Context) {
      return context.prisma.posts({ where: { published: false } })
    },
    post(parent, { id }, context: Context) {
      return context.prisma.post({ id })
    },
    expense(parent, { id }, context: Context) {
      return context.prisma.expense({ id })
    },
  },
  Mutation: {
     createDraft(parent, { title, content }, context: Context) {
      return context.prisma.createPost({ title, content })
    },
    createExpense(parent, { description, ammount }, context: Context) {
      return context.prisma.createExpense({ 
        description, 
        ammount })
    },
    deleteExpense(parent, { id }, context: Context) {
      return context.prisma.deleteExpense({ id })
    },
    deletePost(parent, { id }, context: Context) {
      return context.prisma.deletePost({ id })
    },
    publish(parent, { id }, context: Context) {
      return context.prisma.updatePost({
        where: { id },
        data: { published: true },
      })
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma },
})
server.start(() => console.log('Server is running on http://localhost:4000'))
