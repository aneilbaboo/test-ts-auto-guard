// /** @see {isSimpleType} ts-auto-guard:type-guard */
// export type SimpleType = string | number;

// /** @see {isRecursiveType} ts-auto-guard:type-guard */
// export type RecursiveType = { children: RecursiveType[] };

// /** @see {isParentType} ts-auto-guard:type-guard */
// export type ParentType = { type: 'parent', children: ChildType[] };

// /** @see {isChildType} ts-auto-guard:type-guard */
// export type ChildType = { type: 'child', parent: ParentType };

//  /** @see {IsAtomOrList} ts-auto-guard:type-guard */
// export type AtomOrList = WrappedAtom | Atom[];
// /** @see {IsAtom} ts-auto-guard:type-guard */
// export type Atom = WrappedAtom; // | InputInstruction;
// /** @see {IsWrappedAtom} ts-auto-guard:type-guard */
// export type WrappedAtom = { Atoms: AtomOrList } | string;


// // causes hang
// /** @see {IsBranch} ts-auto-guard:type-guard */
// export type Branch = { branches: Branch[] } | {branches: Branch }[] | string;

// causes stack overflow
// /** @see {IsBranch} ts-auto-guard:type-guard */
// export type Branch = { branches: Branch[] } | string;

// causes stack overflow
// /** @see {IsBranch} ts-auto-guard:type-guard */
export type Branch = Branch[] | string;

/** @see {IsBranch} ts-auto-guard:type-guard */
// export type Branch = Branch[] | {branchs: Branch}[] | string;

// /** @see {IsStringOrList} ts-auto-guard:type-guard */
// export type StringOrList = { strings: StringOrList } | string;

// /** @see {IsAtom} ts-auto-guard:type-guard */
// export type Atom = WrappedAtom; // | InputInstruction;
// /** @see {IsWrappedAtom} ts-auto-guard:type-guard */
// export type WrappedAtom = { Atoms: AtomOrList } | string;