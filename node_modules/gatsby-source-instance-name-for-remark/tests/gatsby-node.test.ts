import { Node, onCreateNode } from '../src/gatsby-node'

describe('Plugin', () => {
  describe('Basics', () => {
    it('exports onCreateNode function', () => {
      expect(onCreateNode).not.toBeInstanceOf(() => undefined)
    })
  })

  describe('onCreateNode', () => {
    describe('MarkdownRemark node type', () => {
      const getNode = jest.fn().mockReturnValue({
        sourceInstanceName: 'instance source name'
      })
      const createNodeField = jest.fn()
      const boundActionCreators = { createNodeField }
      const node: Node = {
        internal: {
          type: 'MarkdownRemark'
        },
        parent: {
          sourceInstanceName: 'instance source name'
        }
      }

      onCreateNode({ node, boundActionCreators, getNode })

      it('calls getNode with node.parent', () => {
        expect(getNode).toHaveBeenCalledWith(node.parent)
      })

      it('calls createNodeField with new node field data', () => {
        expect(createNodeField).toHaveBeenCalledWith({
          name: 'sourceInstanceName',
          node,
          value: node.parent.sourceInstanceName
        })
      })
    })

    describe('none-MarkdownRemark node type', () => {
      const getNode = jest.fn()
      const createNodeField = jest.fn()
      const boundActionCreators = { createNodeField }
      const node: Node = {
        internal: {
          type: 'none-MarkdownRemark'
        },
        parent: {
          sourceInstanceName: 'instance source name'
        }
      }

      onCreateNode({ node, boundActionCreators, getNode })

      it('does not call getNode', () => {
        expect(getNode).not.toHaveBeenCalled()
      })

      it('calls createNodeField with new node field data', () => {
        expect(createNodeField).not.toHaveBeenCalled()
      })
    })
  })
})
