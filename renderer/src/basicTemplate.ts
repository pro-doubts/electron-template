import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { fastAnchor, fastButton, fastAnchoredRegion, provideFASTDesignSystem } from "@microsoft/fast-components";
@customElement('basic-template')
export class BasicTemplate extends LitElement
{
    constructor(){
        super();
        provideFASTDesignSystem().register(
            fastButton(),
            fastAnchor(),
            fastAnchoredRegion()
        );
    }
    static override styles = css`
        .mainContainer{
            display : flex;
            flex-direction : column;
            height : 100vh;
            width : 100%;
            border : 5px solid black;
        }
        header{
            background-color : gray;
            color : black;
            border-bottom : 5px solid black; 
            text-align : center;

        }
        section{
            display : flex;
            flex-direction : row;
            height : 100%;
            width : 100%;
        }
        nav{
            background-color : black;
            color : gray;
            padding : 20px;
        }
        main{
            background-color : gray;
            color : black;
            width : 70%
        }
        iframe{
            width : 100%;
            height : 100%;
        }
        footer{
            background-color : gray;
            color : black;
            text-align : center;
        }
        aside{
            text-align: center;
            font-size : 15px;
        }
        .menus{
            margin-bottom : 20px;

        }
    `; 

    @property()
    menu : string = 'none';
    override render() {
        return html`
            <div class="mainContainer">
                <header>
                    <h2>Basic Template</h2>
                </header>
                <section>
                    <nav>
                        <div class="menus">
                            <fast-anchor appearance="accent" href="https://microsoft.com" target="bodyframe">Microsoft</fast-anchor>
                        </div>
                        <div class="menus">
                            <fast-anchor appearance="accent" href="https://www.google.com/" target="bodyframe">Google</fast-anchor>
                        </div>
                        <div class="menus">
                            <fast-anchor appearance="accent" href="https://www.fast.design/" target="bodyframe">FAST</fast-anchor>
                        </div>
                        <div class="menus">
                            <fast-anchor appearance="accent" href="https://lit.dev/" target="bodyframe">Lit</fast-anchor>
                        </div>
                        <div class="menus">
                            <fast-anchor appearance="accent" href="https://www.typescriptlang.org/" target="bodyframe">Typescript</fast-anchor>
                        </div>
                    </nav>
                    <main>
                        <iframe name='bodyframe' id='frame' src="https://microsoft.com"> </iframe>
                    </main>
                    <aside>
                        <p>Advertisement here...</p>
                    </aside>
                </section>
                <footer>
                        <div>
                            <p>Learn & Explore here...</p>
                        </div>
                </footer>
            </div>
        `;
    }
}