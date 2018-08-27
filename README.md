# ReactJS Skeleton Project

This project represents a foundational structure for all Impekable projects to extend when constructing ReactJS web applications.

## Getting Started

For anyone unfamiliar with common NodeJS practices, having `npm` and running `npm install` after cloning the project is imperative.  This will download the associated NodeJS dependencies locally.  This process is well documented, so please refer to `npm` references on use and management of project dependencies.

## Structure

This project outlines a few structural elements that should be maintained.

### Document Root

The core of the application is implemented and rendered from `src` using the HTML content in `index.html` and loading `index.jsx` to initiate the application.  Typically, other than general base level navigation and layout management, you should not need to interact with this layer.  Commonly, adding external references, meta-tags and other elements important for non-javascript environments is performed here.

### Application Content

All dynamic application content should be stored in `src` or a client-named folder, e.g. `acme/` for ACME corporation.

#### Components

Components should serve as a cohesive container for distinctly related assets, and contrary to common practice, which uses a single `components` directory, Impekable recommends nested hierarchy indicative of relationship in implementation.  The root structure should be housed in `src/views` and demonstrated in this project for reference.  A top-level grouping by similar categorization is also encouraged, for example:

```bash
src/
  views/
    Body/
      AddressList/
      User/
        Profile/
        Settings/
        Image/
      ...
    Google/
      Map/
      Search/
    Twilio/
      Dialer/
      ...
```

The root of the component should contain a `.jsx` file that is named appropriately for the component, e.g. `/views/Header/Header.jsx`.

#### Actions

As indicated above, directly relative Actions should be contained in their respective component directory.  In the provided directory, this is demonstrated by the `Header` component.

```bash
src/
  views/
    Header/
      headerActions.js
```

#### Reducers

As indicated above, directly relative Reducers should be contained in their respective component directory.  In the provided directory, this is demonstrated by the `Header` component.

```bash
src/
  views/
    Header/
      headerReducer.js
```

#### Styles

As indicated above, directly relative Styles should be contained in their respective component directory.  In the provided directory, this is demonstrated by the `Header` component.

```bash
src/
  views/
    Header/
      Header.scss
```

### Global Actions, Reducers and Redux

For overall application mapping of Actions and Reducers, place the appropriate files in `src/store`.  `index.js` is reserved as the primary entry point and should be taylored to import all required Reducers, maintaining the provided loading definitions.

### Static Content

Any static content that requires non processing before delivery to the client, should be housed in `/static`.  This typically applies to baseline stylesheets and client provided assets such as logos, banners and other image artifacts.  Content in this directory will be directly referenced and no pre-processing is performed.

## Docker Notes

This project provides a rudimentary `Dockerfile` for use in crafting a release image.  The configuration provided extends an in-house Impekable created image, `impekable/nodejs:8` which has additionally scripting included.  The original may be referenced [here](https://gitlab.impekable.cloud/impekable/docker/dockerfiles/tree/nodejs).

The base image is built around NodeJS release version 8 at the time of this writing.

## CI/CD Notes

### GitLab

This project includes stubs for CI/CD in the form of `gitlab-ci.yml` which can be used as reference for other build system needs.

#### Configuration

In order for CI/CD to work correct, it assumes the existence of a small number of environment variable values.  These are as follows:


```bash
| Name                  | Description                                 |
| --------------------- | ------------------------------------------- |
| AWS_ACCESS_KEY_ID     | Project specific AWS IAM access key id.     |
| AWS_SECRET_ACCESS_KEY | Project specific AWS IAM access secret key. |
| AWS_REGION            | Appropriate AWS region for this build.      |
```

Be sure to configure these values before running any CI/CD jobs, or you will receive errors in the process regarding missing credentials.  The provided tooling utilizes `impekable/awscli` and it's included `/impekable/configure-aws` tool to configure CLI options and settings appropriately.