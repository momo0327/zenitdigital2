// Next declares '*.module.css' but not plain '*.css'. The Zenia components
// import global stylesheets for their side effects, so declare that form too
// or the editor flags TS2882 on every one.
declare module "*.css";
