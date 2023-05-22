import ASTNode from './ASTNode';
import { Visitor } from './Visitor';
import DefinitionBlock from './DefinitionBlock';
import OutputBlock from './OutputBlock';
import { Range } from '../util/Range';
import CanvasConfiguration from './CanvasConfiguration';
export default class Program extends ASTNode {
  readonly canvasConfiguration?: CanvasConfiguration;
  readonly definitionBlock?: DefinitionBlock;
  readonly outputBlock: OutputBlock;

  constructor(range: Range, outputBlock: OutputBlock, canvasConfiguration?: CanvasConfiguration, definitionBlock?: DefinitionBlock) {
    super(range);
    this.canvasConfiguration = canvasConfiguration;
    this.definitionBlock = definitionBlock;
    this.outputBlock = outputBlock;
  }

  accept<T, U>(v: Visitor<T, U>, t: T): U {
    // walk through the tree case statement according to node kind, assign one of these functions accordingly
    // 2, map from node kind to one of these sorts of functions
    return v.visitProgram(this, t);
  }
}
